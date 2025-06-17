import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer"
import VideoContainer from "./VideoContainer"
import useMovieGenres from "../hooks/useMovieGenres";
import usePopularPeople from "../hooks/usePopularPeople";

const Browser = () => {  

          useMovieGenres();
          useNowPlayingMovies();
          usePopularMovies(); 
          useTopRatedMovies();
          useUpcomingMovies();
          usePopularPeople();
  return (
    <>
        <MainContainer/><VideoContainer/>
    </>
  )
}

export default Browser