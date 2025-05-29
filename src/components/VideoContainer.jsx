import { useSelector } from "react-redux"
import List from "./List"
import { Col, Container, Row } from "react-bootstrap"
import Genres from "./Genres";
 
const VideoContainer = () => { 
  const nowPlayingMovies = useSelector((store)=>store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movie.popularMovies);
  const topRatedMovies = useSelector((store)=>store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store)=>store.movie.upcomingMovies);
  const popularPeople = useSelector((store)=>store.people.popularPeople);
  const showGptSearch = useSelector((state) => state.gpt?.showGptSearch);
  
  
  
  return (
    <Container fluid={true} className="bg-dark display-1 text-dark position-absolute top-100 z-2">
      <Row className="gap-4 d-flex flex-column">
        <Col xs={12} className="position-absolute bottom-95"> 
          <List title={"now_playing"} movieList={nowPlayingMovies?.results||[]} />
        </Col> 
        <Col xs={12} className="mt-5">
          <List title={"top_rated"} movieList={topRatedMovies?.results||[]}  />
        </Col>
        <Col xs={12} >
          <List title={"popular"} movieList={popularMovies?.results||[]} />
        </Col> 
        <Col xs={12} >
          <List title={"upcoming"} movieList={upcomingMovies?.results||[]} />
        </Col> 
        <Col xs={12} className="mb-3"> 
          <Genres/>
        </Col> 

        <Col xs={12} className="mb-3">
          <List title={"Popular People"}  peopleList={popularPeople} />
        </Col>
      </Row>
    </Container>
  )
  
}

export default VideoContainer