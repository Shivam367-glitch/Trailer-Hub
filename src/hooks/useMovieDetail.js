import { API_OPTIONS } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addViewedMovie } from "../utils/movieSlice";

const useMovieDetail = (movieId) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const viewedMovie = useSelector((store) =>
    store?.viewedMovies?.find((movie) => movie.id === movieId)
  );

  const getMovieInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        { ...API_OPTIONS } 
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const json = await response.json();
      if (json) {
        dispatch(addViewedMovie(json));
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      setError(error?.message || "Something Went Wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!viewedMovie && movieId) {
      getMovieInfo();
    }
  }, [movieId]); 

  return [error, loading];
};

export default useMovieDetail;
