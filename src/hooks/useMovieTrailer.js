import { addNowPlayingVideo } from "../utils/nowPlayingSlice";
import {API_OPTIONS} from "../utils/Constants" 
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"; 
import {BASE_URL} from "../utils/Constants";  
const useMovieTrailer = (id) => {
 
  const dispatch = useDispatch();
  const nowPlaying=useSelector((store)=>store?.nowPlaying);

  const getVideoTrailer = async () => {
 
    try {
      const response = await fetch(`${BASE_URL}movie/${id}/videos`, API_OPTIONS);
      const json = await response.json();
     
      const video = json.results.find((video) => video.type === "Trailer"); 
       
      
      if (video) { 
        dispatch(addNowPlayingVideo({ id: json.id, videoId: video?.key }));
        return true;
      }else{
        dispatch(addNowPlayingVideo({ id: json.id, videoId: json?.results[0]?.key}));
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  }; 


  

  useEffect(() => { 
    if(nowPlaying?.id !== id) {
      getVideoTrailer(); 
    }
  }, [id]);
}

export default useMovieTrailer