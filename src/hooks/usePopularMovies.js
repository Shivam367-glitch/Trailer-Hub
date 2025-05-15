import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { BASE_URL } from "../utils/Constants";

const usePopularMovies = () => { 
    const dispatch=useDispatch(); 
    const popularMovies=useSelector((store)=>store?.popularMovies); 
    const country=useSelector((store)=>store?.country?.country);
    const getPopularMovies=async()=>{
    const data=await fetch(`${BASE_URL}movie/popular?page=1&region=${country}`, API_OPTIONS);
    const json=await data.json(); 
    dispatch(addPopularMovies(json?.results));
  } 
  useEffect(()=>{
     !popularMovies && getPopularMovies()
  },[])
  
}

export default usePopularMovies