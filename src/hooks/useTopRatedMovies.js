import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { BASE_URL } from "../utils/Constants";

const useTopRatedMovies = () => { 
    const dispatch=useDispatch(); 
    const topRatedMovies=useSelector((store)=>store?.topRatedMovies);
   console.log(topRatedMovies);

 
  useEffect(() => {
    const getTopRatedMovies=async()=>{
      const data=await fetch(`${BASE_URL}movie/top_rated?page=1`, API_OPTIONS);
      const json=await data.json(); 
      dispatch(addTopRatedMovies(json?.results));   
     } 
    if (!topRatedMovies || topRatedMovies.length === 0) {
      console.log("topRatedMovies");
      
        getTopRatedMovies();
    }
}, []);
}

export default useTopRatedMovies