import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { BASE_URL } from "../utils/Constants";

const usePopularMovies = () => { 
    const dispatch=useDispatch(); 
    const page = useSelector((store) => store.movie.popularMovies?.page || 1);
    
    const country=useSelector((store)=>store?.country?.country);
    useEffect(()=>{
    const getPopularMovies=async()=>{
    const data=await fetch(`${BASE_URL}movie/popular?page=${page}&region=${country}`, API_OPTIONS);
    const json=await data.json(); 
    dispatch(addPopularMovies(json));
  } 
      getPopularMovies()
  },[page,country,dispatch])
  
}

export default usePopularMovies