import { useDispatch, useSelector } from "react-redux";
import { addGenres } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";
import {BASE_URL} from "../utils/Constants";  

const useMovieGenres = () => { 
   const dispatch=useDispatch();  
   const[error,setError]=useState("");

   const genres=useSelector((store)=>store?.movie?.genres);
   const getMovieGenres=async()=>{ 
    setError("");
    try {
      const data=await fetch(`${BASE_URL}genre/movie/list`, API_OPTIONS);
      const json=await data.json();  
      
      if(!data.ok) {
        throw new Error(json.status_message || "Failed to fetch Genres");
      }

        dispatch(addGenres(json?.genres));
    } catch (error) {
      setError(`Failed to fetch movie genres: ${error.message}`);
    }
  }
  useEffect(() => {
    !genres && getMovieGenres();
  }, []);

  return [error];
}

export default useMovieGenres;