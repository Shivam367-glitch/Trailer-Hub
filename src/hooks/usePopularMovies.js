import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, HOME_MOVIE_URL } from "../utils/Constants";
import { getDiscoverParams } from "../utils/discoverParams";

const usePopularMovies = () => { 
    const dispatch=useDispatch(); 
    const page = useSelector((store) => store.movie.popularMovies?.page || 1);
    
    const country=useSelector((store)=>store?.country?.country);
    useEffect(()=>{
    const getPopularMovies=async()=>{
     const data=await fetch(`${HOME_MOVIE_URL}&region=${country}&with_origin_country=${country}&${new URLSearchParams(getDiscoverParams("popular")).toString()}`, API_OPTIONS);

    const json=await data.json(); 
    dispatch(addPopularMovies(json));
  } 
      getPopularMovies()
  },[page,country,dispatch])
  
}

export default usePopularMovies