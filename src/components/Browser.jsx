import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer"
import VideoContainer from "./VideoContainer"
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useMovieGenres from "../hooks/useMovieGenres";
import usePopularPeople from "../hooks/usePopularPeople";

const Browser = () => {  

          const showGpt=useSelector((store)=>store.gpt.showGptSearch);
          useMovieGenres();
          useNowPlayingMovies();
          usePopularMovies(); 
          useTopRatedMovies();
          useUpcomingMovies();
          usePopularPeople();
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