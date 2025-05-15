import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { BASE_URL } from "../utils/Constants";

const useUpcomingMovies = () => { 
    const dispatch=useDispatch(); 
    const upcomingMovies=useSelector((store)=>store?.upcomingMovies); 
   const country=useSelector((store)=>store?.country?.country);
   const getUpcomingMovies=async()=>{
   const data=await fetch(`${BASE_URL}movie/upcoming?page=1&region=${country}`, API_OPTIONS);
   const json=await data.json(); 
   dispatch(addUpcomingMovies(json?.results));
  } 
  useEffect(()=>{
      !upcomingMovies && getUpcomingMovies();
  },[])
  
}

export default useUpcomingMovies