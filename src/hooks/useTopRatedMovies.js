import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS, HOME_MOVIE_URL } from "../utils/Constants";
import { getDiscoverParams } from "../utils/discoverParams";

const useTopRatedMovies = () => { 
    const dispatch=useDispatch(); 
    const [error,setError] = useState("");
    const country=useSelector((store)=>store?.country?.country);
    const page = useSelector((store) => store.movie.topRatedMovies?.page || 1);



  useEffect(() => {
    const getTopRatedMovies = async () => {
      setError(""); 
      try {
        const data=await fetch(`${HOME_MOVIE_URL}&region=${country}&with_origin_country=${country}&${new URLSearchParams(getDiscoverParams("top_rated")).toString()}`, API_OPTIONS);
        const json=await data.json();
        
        
        if(!data.ok) {
          throw new Error(json.status_message || "Failed to fetch Movies");
        }
        dispatch(addTopRatedMovies(json));   
      } catch (error) {
        setError(`Failed to fetch top-rated movies: ${error.message}`);
      }
    };

    getTopRatedMovies();
}, [page,country, dispatch]);

return [error];  
}

export default useTopRatedMovies