
import { API_OPTIONS } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addViewedMovie } from "../utils/movieSlice";
import { BASE_URL } from "../utils/Constants"; 

const useMovieDetail = (movieId) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const viewedMovie=useSelector((store)=>store?.movie?.viewedMovie?.id==movieId);
 

  const getMovieInfo = async () => {
    if (!movieId) return; 
    // console.log(typeof movieId,typeof viewedMovie?.id);
    
    try {
      setLoading(true);

      const [details, providers] = await Promise.all([
        fetch(
          `${BASE_URL}movie/${movieId}`,
          { ...API_OPTIONS }
        ),
        fetch(
          `${BASE_URL}movie/${movieId}//watch/providers`,
          { ...API_OPTIONS }
        )
      ]);
       
      const detailsJson = await details.json();
      const providersJson = await providers.json();
      dispatch(addViewedMovie({
        ...detailsJson,
        watch_providers: providersJson.results,
      })); 

    } catch (error) {
      console.error("Error fetching movie:", error);
      setError(error?.message || "Something Went Wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // If the movie isn't in the store and movieId is valid, fetch it.
    if (!viewedMovie && movieId) { 
      getMovieInfo();
    }
    // We rely on movieId changes to re-trigger this effect.
  }, [movieId]);

  return [ error, loading ];
};

export default useMovieDetail;

