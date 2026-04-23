import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addViewedMovie } from "../store/movieSlice";
import {API_OPTIONS, BASE_URL } from "../utils/constant"; 

const useMovieDetail = (movieId) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const viewedMovie=useSelector((store)=>store?.movie?.viewedMovie?.id==movieId);
 

  const getMovieInfo = async () => {
    if (!movieId) return; 

    try {
      setLoading(true);

      const [details] = await  Promise.all([
        fetch(
          `${BASE_URL}movie/${movieId}?append_to_response=credits,watch/providers`,
          { ...API_OPTIONS }
        )
      ]);
       
      const detailsJson = await details.json();
      dispatch(addViewedMovie({ ...detailsJson})); 
    } catch (error) {
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

  return [ error, loading ];
};

export default useMovieDetail;

