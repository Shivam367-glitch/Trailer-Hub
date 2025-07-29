import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import GridList from "./GridList";
import Error from "./Error";
import {fetchMovie} from  "../utils/movieSearchSlice" 


const MovieSearch = () => {
  const dispatch = useDispatch();
  const { movieList, status, error } = useSelector((state) => state.movieSearch);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchMovie(query));
    }
  };

  return (
    <>
      <Container fluid={true}>
        <Row as={Form} className="m-0 p-0 mt-5 align-items-center justify-content-center  ">
          <h2 className="text-white text-center">Search Movie</h2>
          <Col xs={7} sm={6} lg={4} className="m-0 p-0 mt-3">
            <input
              type="text"
              className="rounded-2 p-2 border-none w-100"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Movie"
            />
          </Col>
          <Col xs={5} sm={3} lg={2} className="mx-0  mt-3">
            <Button
              variant="danger"
              onClick={handleSearch}
              disabled={status === "loading"}
              className="p-2 w-100"
            >
              {status === "loading" ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Search"
              )}
            </Button>
          </Col>
          {status === "failed" &&  <Error error={error}/>}
          {status === "succeeded" && movieList.length === 0 && (
            <Error error="No results found" />
          )}
        </Row>

        {status === "succeeded" && movieList.length > 0 && (
          <Row className="g-0">
            <Col xs={12} className="m-0 p-0 ">
              <GridList title={"Movie"} items={movieList}   />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default MovieSearch;
