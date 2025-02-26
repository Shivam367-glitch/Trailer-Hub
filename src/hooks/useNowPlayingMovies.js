import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import {BASE_URL} from "../utils/Constants";  

const useNowPlayingMovies = () => { 
   const dispatch=useDispatch(); 
   const nowPlayingMovies=useSelector((store)=>store?.nowPlayingMovies);
   const getNowPlayingMovies=async()=>{
   const data=await fetch(`${BASE_URL}movie/now_playing?page=1`, API_OPTIONS);
   const json=await data.json(); 
   dispatch(addNowPlayingMovies(json?.results));
  } 
  useEffect(()=>{
    !nowPlayingMovies &&  getNowPlayingMovies()
  },[])
  
}

export default useNowPlayingMovies