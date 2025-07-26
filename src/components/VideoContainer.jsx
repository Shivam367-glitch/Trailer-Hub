import { useSelector } from "react-redux"
import List from "./List"
import { Col, Container, Row } from "react-bootstrap"
import Genres from "./Genres";
import useMovieGenres from "../hooks/useMovieGenres";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularPeople from "../hooks/usePopularPeople";
 
const  VideoContainer = () => {  

           const [genresError]= useMovieGenres();
          const [nowplayingError]=  useNowPlayingMovies();
           const[popularError]= usePopularMovies(); 
            const[topRatedError]= useTopRatedMovies();
            const[upcomingError]= useUpcomingMovies();
            const[popularPeopleError]= usePopularPeople(); 


  const nowPlayingMovies = useSelector((store)=>store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movie.popularMovies);
  const topRatedMovies = useSelector((store)=>store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store)=>store.movie.upcomingMovies);
  const popularPeople = useSelector((store)=>store.people.popularPeople);


 
  
  return (
    <Container fluid={true} className="bg-dark display-1 text-dark position-absolute top-100 z-2">
      <Row className=" d-flex flex-column">
        <Col xs={12} id="next-section"  className="mt-3"> 
          <List title={"now_playing"} movieList={nowPlayingMovies||[]} error={nowplayingError} />
        </Col> 
        <Col xs={12} className="mt-3">
          <List title={"top_rated"} movieList={topRatedMovies||[]} error={topRatedError} />
        </Col>
        <Col xs={12}  className="mt-3">
          <List title={"popular"} movieList={popularMovies||[]} error={popularError} />
        </Col> 
        <Col xs={12}  className="mt-3">
          <List title={"upcoming"} movieList={upcomingMovies||[]} error={upcomingError} />
        </Col> 
        <Col xs={12} className="mt-3">
          <List title={"Popular People"}  peopleList={popularPeople} error={popularPeopleError} />
        </Col>
        <Col xs={12} className="mt-3 mb-3"> 
          <Genres error={genresError} />
        </Col> 

      </Row>
    </Container>
  )
  
}

export default VideoContainer