import { addNowPlayingVideo } from "../utils/nowPlayingSlice";
import {API_OPTIONS} from "../utils/Constants" 
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"; 

const useMovieTrailer = (id) => {
 
  const dispatch = useDispatch();
  const nowPlayingMovies=useSelector((store)=>store?.nowPlayingMovies);
  const getVideoTrailer = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
      const json = await response.json();

      const video = json.results.find((video) => video.type === "Trailer"); 
      console.log(json.results);
    console.log(video);
    
      
      if (video) {
        dispatch(addNowPlayingVideo({ id: json.id, videoId: video?.key }));
      }else{
        dispatch(addNowPlayingVideo({ id: json.id, videoId: json?.results[0]?.key }));
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => { 
    if(!nowPlayingMovies){
      getVideoTrailer(); 
    }
  }, [id]);
}

export default useMovieTrailer