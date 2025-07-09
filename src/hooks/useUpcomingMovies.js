import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, HOME_MOVIE_URL } from "../utils/Constants";
import { getDiscoverParams } from "../utils/discoverParams";

const useUpcomingMovies = () => { 
    const dispatch=useDispatch(); 
   const country=useSelector((store)=>store?.country?.country);
      const page = useSelector((store) => store.movie.nowPlayingMovies?.page || 1);

      useEffect(()=>{
     const getUpcomingMovies=async()=>{
     const data=await fetch(`${HOME_MOVIE_URL}&region=${country}&region=${country}&with_origin_country=${country}&${new URLSearchParams(getDiscoverParams("upcoming")).toString()}`, API_OPTIONS);
     const json=await data.json(); 
     dispatch(addUpcomingMovies(json));
    } 
     getUpcomingMovies();
  },[country,page,dispatch])
  
}

export default useUpcomingMovies