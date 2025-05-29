import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { BASE_URL } from "../utils/Constants";

const useTopRatedMovies = () => { 
    const dispatch=useDispatch(); 


    const country=useSelector((store)=>store?.country?.country);
 const page = useSelector((store) => store.movie.topRatedMovies?.page || 1);
     
 
  useEffect(() => {
    const getTopRatedMovies=async()=>{
      const data=await fetch(`${BASE_URL}movie/top_rated?page=${page}&region=${country}`, API_OPTIONS);
      const json=await data.json(); 
      dispatch(addTopRatedMovies(json));   
     } 
      
        getTopRatedMovies();
}, [page,country, dispatch]);
}

export default useTopRatedMovies