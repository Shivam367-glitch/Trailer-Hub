import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, HOME_MOVIE_URL } from "../utils/Constants";
import { getDiscoverParams } from "../utils/discoverParams";

const useTopRatedMovies = () => { 
    const dispatch=useDispatch(); 


    const country=useSelector((store)=>store?.country?.country);
    const page = useSelector((store) => store.movie.topRatedMovies?.page || 1);



  useEffect(() => {
    const getTopRatedMovies=async()=>{
      const data=await fetch(`${HOME_MOVIE_URL}&region=${country}&with_origin_country=${country}&${new URLSearchParams(getDiscoverParams("top_rated")).toString()}`, API_OPTIONS);
      const json=await data.json(); 
      dispatch(addTopRatedMovies(json));   
     } 
      
        getTopRatedMovies();
}, [page,country, dispatch]);
}

export default useTopRatedMovies