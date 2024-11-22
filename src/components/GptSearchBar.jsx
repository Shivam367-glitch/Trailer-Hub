import { useRef, useState } from "react";
import { Button,Col,Container,Form, Row, Spinner } from "react-bootstrap";

import { model } from "./geminiAi";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addRecommendedMovies } from "../utils/gptSlice";


const GptSearchBar = () => {
  const inputRef = useRef(null);
  const dispatch=useDispatch();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 const searchMoviesOnTMDB = async (movie, year) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&primary_release_year=${year}&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (error) {
      console.error("Failed to fetch movie details from TMDB:", error);
      return [];
    }
  };

  async function main(query) {
    const createQuery =
      "Recommend five appropriate and safe movies for adults based on the following genre: " +
      query +
      ". Include their release year and provide them as comma-separated values only. Example like: Saving Private Ryan-1998, The Longest Day-1962, Black Hawk Down-2001, Apocalypse Now-1979, Platoon-1986";
    
    setError(""); 
    try {
      setLoading(true);
      const result = await model.generateContent([createQuery]);
      const responseText = await result?.response?.text();
      const movieList = responseText.split(",").map((movie) => movie.trim()); 
      console.log(movieList);

      const moviePromises = movieList?.map((movie) => {
        const movieName = movie.substring(0, movie.lastIndexOf("-")).trim();
        const movieYear = movie.substring(movie.lastIndexOf("-") + 1).trim();
        return searchMoviesOnTMDB(movieName, movieYear);
      });

      const movieDetailsArray = await Promise.all(moviePromises);
      dispatch(addRecommendedMovies(movieDetailsArray));
    } catch (error) {
      if (error.message.includes("GoogleGenerativeAI Error")) {
        setError("Content not generated due to safety concerns.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  const handleGptSearch = async () => {
    const query = inputRef.current.value;
    if (query.trim() === "") {
      setError("Please enter a genre to search.");
      return;
    }
    await main(query);
  };

  return (
   <> 
      <Form className="mt-5 d-flex justify-content-center gap-2 ">
      <Container fluid={'md'}  className="border border-success"> 
        <Row className="d-flex justify-content-lg-center">
          <Col xs={8}  lg={6} className="border border-secondary"> 
          <input
          type="text"
          placeholder="What do you want to watch?"
          className="rounded-2 py-2 px-2 border-none w-100"
          ref={inputRef}
        />
       
          </Col> 
          <Col xs={4}  lg={2} className="border border-secondary">
          <Button variant="danger" onClick={handleGptSearch} disabled={loading} className="w-100">
            {loading ? <Spinner animation="border" size="sm" /> : "Search"}
          </Button>
          </Col> 
          {error && <Col className="text-danger mt-3 fs-5 text-white">{error}</Col>}
        </Row>

      </Container>
      </Form>

     
       </>
  );
};

export default GptSearchBar;
