import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, HOME_MOVIE_URL } from "../utils/Constants";


import{  getDiscoverParams } from "../utils/discoverParams";
const useNowPlayingMovies = () => { 
   const dispatch=useDispatch(); 
 
   const country=useSelector((store)=>store?.country?.country);
   const page = useSelector((store) => store.movie.nowPlayingMovies?.page || 1);
  
   useEffect(()=>{
    const getNowPlayingMovies=async()=>{

      const data=await fetch(`${HOME_MOVIE_URL}&region=${country}&with_origin_country=${country}&${new URLSearchParams(getDiscoverParams("now_playing")).toString()}`, API_OPTIONS);
      const json=await data.json();
    dispatch(addNowPlayingMovies(json));
   } 
      getNowPlayingMovies()
  },[page, country, dispatch]);
  
}

export default useNowPlayingMovies