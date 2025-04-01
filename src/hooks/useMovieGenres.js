import { useDispatch, useSelector } from "react-redux";
import { addGenres } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import {BASE_URL} from "../utils/Constants";  

const useMovieGenres = () => { 
   const dispatch=useDispatch(); 
   const genres=useSelector((store)=>store?.movie?.genres);
   const getMovieGenres=async()=>{
   const data=await fetch(`${BASE_URL}genre/movie/list`, API_OPTIONS);
   
   
   const json=await data.json();  
   console.log(json);
   dispatch(addGenres(json?.genres));
  } 
  useEffect(()=>{
    !genres &&  getMovieGenres()
  },[])
  
}

export default useMovieGenres;