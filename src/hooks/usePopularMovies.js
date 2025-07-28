import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS, HOME_MOVIE_URL } from "../utils/Constants";
import { getDiscoverParams } from "../utils/discoverParams";

const usePopularMovies = () => { 
    const dispatch=useDispatch(); 
    const page = useSelector((store) => store.movie.popularMovies?.page || 1);
    const [error, setError] = useState("");
    const country=useSelector((store)=>store?.country?.country);
    useEffect(()=>{
    const getPopularMovies=async()=>{
      setError("");
      try { 
        const data=await fetch(`${HOME_MOVIE_URL}&page=${page}&region=${country}&with_origin_country=${country}&${new URLSearchParams(getDiscoverParams("popular")).toString()}`, API_OPTIONS);

        const json=await data.json();   

       
        if(!data.ok) {
          throw new Error(json.status_message || "Failed to fetch Movies");
        } 
        
        dispatch(addPopularMovies(json));

      } catch (error) {
        setError(`Failed to fetch popular movies: ${error.message}`);
      }
    };
    getPopularMovies();
  },[page,country,dispatch])

  return [error];
}

export default usePopularMovies;