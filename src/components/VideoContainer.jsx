import { useSelector } from "react-redux"
import List from "./List"
import { Col, Container, Row } from "react-bootstrap"
import Genres from "./Genres";
 
const  VideoContainer = () => { 
  const nowPlayingMovies = useSelector((store)=>store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movie.popularMovies);
  const topRatedMovies = useSelector((store)=>store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store)=>store.movie.upcomingMovies);
  const popularPeople = useSelector((store)=>store.people.popularPeople);


 
  
  return (
    <Container fluid={true} className="bg-dark display-1 text-dark position-absolute top-100 z-2">
      <Row className=" d-flex flex-column">
        <Col xs={12} id="next-section"  className="mt-3"> 
          <List title={"now_playing"} movieList={nowPlayingMovies||[]} />
        </Col> 
        <Col xs={12} className="mt-3">
          <List title={"top_rated"} movieList={topRatedMovies||[]}  />
        </Col>
        <Col xs={12}  className="mt-3">
          <List title={"popular"} movieList={popularMovies||[]} />
        </Col> 
        <Col xs={12}  className="mt-3">
          <List title={"upcoming"} movieList={upcomingMovies||[]} />
        </Col> 
        <Col xs={12} className="mt-3">
          <List title={"Popular People"}  peopleList={popularPeople} />
        </Col>
        <Col xs={12} className="mt-3 mb-3"> 
          <Genres/>
        </Col> 

      </Row>
    </Container>
  )
  
}

export default VideoContainer