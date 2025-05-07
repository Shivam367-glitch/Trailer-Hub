 
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { API_OPTIONS } from "../utils/Constants";
import {BASE_URL} from "../utils/Constants";  
import { addMovies } from "../utils/categorySlice";

const useGenreMovies = () => { 

  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
    let {type}=useParams(); 
    const dispatch=useDispatch(); 
    const getMovie=async()=>{
      try {
        setLoading(true); 
       const data=await fetch(`${BASE_URL}discover/movie?sort_by=popularity.desc&with_genres=${type}`, API_OPTIONS);
       const json=await data.json();  
       dispatch(addMovies(json?.results));
      } catch (error) {
        setError(error.message);
      }
      finally{
        setLoading(loading);  
      }
      } 
    useEffect(()=>{
        getMovie();
    },[]);

    return [loading,error]
}

export default useGenreMovies