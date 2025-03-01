import { useSelector } from "react-redux"
import List from "./List"
import { Col, Container, Row } from "react-bootstrap"
 
const VideoContainer = () => { 
  const nowPlayingMovies = useSelector((store)=>store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movie.popularMovies);
  const topRatedMovies = useSelector((store)=>store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store)=>store.movie.upcomingMovies);
  const showGptSearch = useSelector((state) => state.gpt?.showGptSearch);
  
  
  return (
    <Container fluid={true} className="bg-dark display-1 text-dark position-absolute top-100">
      <Row className="gap-4 d-flex flex-column">
        <Col xs={12} className="position-absolute bottom-95"> 
          <List title={"Now Playing"} movieList={nowPlayingMovies} showGptSearch={showGptSearch}/>
        </Col> 
        <Col xs={12} className="mt-5">
          <List title={"Top Rated"} movieList={topRatedMovies} showGptSearch={showGptSearch}/>
        </Col>
        <Col xs={12} >
          <List title={"Popular"} movieList={popularMovies} showGptSearch={showGptSearch}/>
        </Col> 
        <Col xs={12} className="mb-3">
          <List title={"Upcoming Movies"} movieList={upcomingMovies} showGptSearch={showGptSearch}/>
        </Col>
      </Row>
    </Container>
  )
  
}

export default VideoContainer