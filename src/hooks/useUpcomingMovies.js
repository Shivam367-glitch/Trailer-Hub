import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS, HOME_MOVIE_URL } from "../utils/Constants";
import { getDiscoverParams } from "../utils/discoverParams";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const country = useSelector((store) => store?.country?.country);
  const page = useSelector((store) => store.movie.nowPlayingMovies?.page || 1);
  const [error, setError] = useState("");
  useEffect(() => {
    const getUpcomingMovies = async () => {
      setError("");
      try {
        const data = await fetch(
          `${HOME_MOVIE_URL}&region=${country}&region=${country}&with_origin_country=${country}&${new URLSearchParams(
            getDiscoverParams("upcoming")
          ).toString()}`,
          API_OPTIONS
        );
        const json = await data.json();  
        console.log(json);
        
        if (!data.ok) {
          throw new Error(json.status_message || "Failed to fetch Movies");
        }
        dispatch(addUpcomingMovies(json));
      } catch (error) {
        setError(`Failed to fetch upcoming movies: ${error.message}`);
      }
    };
    getUpcomingMovies();
  }, [country, page, dispatch]);

  return [error];
};

export default useUpcomingMovies;
