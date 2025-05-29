import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import {BASE_URL} from "../utils/Constants";  

const useNowPlayingMovies = () => { 
   const dispatch=useDispatch(); 
 
   const country=useSelector((store)=>store?.country?.country);
   const page = useSelector((store) => store.movie.nowPlayingMovies?.page || 1);
   useEffect(()=>{
    const getNowPlayingMovies=async()=>{
    const data=await fetch(`${BASE_URL}movie/now_playing?page=${page}&region=${country}`, API_OPTIONS);
    const json=await data.json(); 
    dispatch(addNowPlayingMovies(json));
   } 
      getNowPlayingMovies()
  },[page, country, dispatch]);
  
}

export default useNowPlayingMovies