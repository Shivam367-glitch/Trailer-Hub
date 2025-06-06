 
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { API_OPTIONS } from "../utils/Constants";
import {BASE_URL} from "../utils/Constants";  
import { addMovies } from "../utils/categorySlice";

const useGenreMovies = () => { 

  const[loading,setLoading]=useState(false); 
    const country=useSelector((store)=>store?.country?.country);
    const[error,setError]=useState(null);

    let {type}=useParams(); 
    const dispatch=useDispatch(); 
    const getMovie=async()=>{
      try {
        setLoading(true); 
       const data=await fetch(`${BASE_URL}discover/movie?sort_by=popularity.desc&with_genres=${type}&region=${country}`, API_OPTIONS);
       const json=await data.json();  
       dispatch(addMovies({movies:json?.results, id:type}));
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