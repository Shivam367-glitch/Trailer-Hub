import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import { Col, Container, Row } from "react-bootstrap"

const VideoContainer = () => { 
  const nowPlayingMovies=useSelector((store)=>store?.movie?.nowPlayingMovies)
  const popularMovies=useSelector((store)=>store?.movie?.popularMovies);
  const topRatedMovies=useSelector((store)=>store?.movie?.topRatedMovies);
  const upcomingMovies=useSelector((store)=>store?.movie?.upcomingMovies);
  const  showshowGptSearch=useSelector((store)=>store?.gpt?.showGptSearch);
  return (
    <Container fluid={true} className="bg-dark display-1 text-dark position-absolute top-100 z-2">
      <Row className="gap-4 d-flex flex-column">
        <Col xs={12} className="position-absolute bottom-95"> 
          <MovieList title={"Now Playing"} movieList={nowPlayingMovies} showGptSearch={showshowGptSearch}/>
        </Col> 
        <Col xs={12} className="mt-5">
          <MovieList title={"Top Rated"} movieList={topRatedMovies} showGptSearch={showshowGptSearch}/>
        </Col>
        <Col xs={12} >
          <MovieList title={"Popular"} movieList={popularMovies} showGptSearch={showshowGptSearch}/>
        </Col> 
        <Col xs={12} className="mb-3">
          <MovieList title={"Upcoming Movies"} movieList={upcomingMovies} showGptSearch={showshowGptSearch}/>
        </Col>
      </Row>
    </Container>
  )
}

export default VideoContainer