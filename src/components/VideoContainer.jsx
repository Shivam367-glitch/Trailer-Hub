import { useSelector } from "react-redux"
import List from "./List"
import { Col, Container, Row } from "react-bootstrap"
import Genres from "./Genres";
 
const VideoContainer = () => { 
  const nowPlayingMovies = useSelector((store)=>store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movie.popularMovies);
  const topRatedMovies = useSelector((store)=>store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store)=>store.movie.upcomingMovies);
  const trendingPeople = useSelector((store)=>store.people.trendingPeople);
  const showGptSearch = useSelector((state) => state.gpt?.showGptSearch);
  
  console.log(trendingPeople);
  
  return (
    <Container fluid={true} className="bg-dark display-1 text-dark position-absolute top-100 z-2">
      <Row className="gap-4 d-flex flex-column">
        <Col xs={12} className="position-absolute bottom-95"> 
          <List title={"Now Playing"} movieList={nowPlayingMovies} />
        </Col> 
        <Col xs={12} className="mt-5">
          <List title={"Top Rated"} movieList={topRatedMovies}  />
        </Col>
        <Col xs={12} >
          <List title={"Popular"} movieList={popularMovies} />
        </Col> 
        <Col xs={12} >
          <List title={"Upcoming Movies"} movieList={upcomingMovies} />
        </Col> 
        <Col xs={12} className="mb-3"> 
          <Genres/>
        </Col> 

        <Col xs={12} className="mb-3">
          <List title={"Trending People"}  peopleList={trendingPeople} />
        </Col>
      </Row>
    </Container>
  )
  
}

export default VideoContainer