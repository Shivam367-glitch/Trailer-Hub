import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer"
import VideoContainer from "./VideoContainer"
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {  

          const showGpt=useSelector((store)=>store.gpt.showGptSearch);
          
          useNowPlayingMovies();
          usePopularMovies(); 
          useTopRatedMovies();
          useUpcomingMovies();
  return (
    <>
      {
        showGpt?<GptSearch/>:<>
        <MainContainer/><VideoContainer/>
        </>
      }
    </>
  )
}

export default Browser