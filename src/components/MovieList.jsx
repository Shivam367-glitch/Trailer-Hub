import { Col, Container, Row } from "react-bootstrap"
import MovieCard from "./MovieCard"
import { useSelector } from "react-redux";




const MovieList = ({ title, movieList, showGptSearch }) => { 
  const recommendedMovies = useSelector((store) => store?.gpt?.recommendedMovies);
 

  return (
    <Container fluid={true}> 
      <Row>
        <Col xs={12}> 
          <h2 className="text-white">{title}</h2> 
        </Col> 

        {showGptSearch && recommendedMovies && recommendedMovies.length > 0 ? (
          <Col xs={12} className="container_scroll d-flex flex-row gap-4"> 
            {recommendedMovies.map((movies, outerIndex) => (
              movies.map((movie, ind) => (
                <MovieCard key={`${outerIndex}-${ind}`} {...movie} className="mb-5" />
              ))
            ))}
          </Col>
        ) : (
          <Col xs={12} className="container_scroll d-flex flex-row gap-4"> 
            {movieList?.map((movie, ind) => (
              <MovieCard key={ind} {...movie} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default MovieList;
