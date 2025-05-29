import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { BASE_URL } from "../utils/Constants";

const useUpcomingMovies = () => { 
    const dispatch=useDispatch(); 
   const country=useSelector((store)=>store?.country?.country);
      const page = useSelector((store) => store.movie.nowPlayingMovies?.page || 1);

      useEffect(()=>{
     const getUpcomingMovies=async()=>{
     const data=await fetch(`${BASE_URL}movie/upcoming?page=${page}&region=${country}`, API_OPTIONS);
     const json=await data.json(); 
     dispatch(addUpcomingMovies(json));
    } 
     getUpcomingMovies();
  },[country,page,dispatch])
  
}

export default useUpcomingMovies