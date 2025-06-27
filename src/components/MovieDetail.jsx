import { useState} from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { useParams} from "react-router-dom";
import { Circle } from "rc-progress";
import { IMG_CDN_URL } from "../utils/Constants";
import {useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import useMovieDetail from "../hooks/useMovieDetail";
import VideoTrailer from "./VideoTrailer";
import { Link } from "react-router-dom"; 
import { addToWatchHistory } from "../utils/watchHistorySlice"; 
import { setCategoryPage } from "../utils/categorySlice";

const MovieDetail = () => {
  let { movieId } = useParams();
   

  const dispatch=useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const movie = useSelector((store) => store?.movie?.viewedMovie);
  const [error, loading] = useMovieDetail(movieId);
   

  const handleWatch=()=>{
    setModalShow(true);  
    dispatch(addToWatchHistory(movie));
  } 

  if (!movie ) return null;
  

  const { original_title, genres, poster_path, tagline, overview, runtime, title, homepage ,watch_providers} = movie;
   
  
  let hr = Math.floor(runtime / 60);
  let min = runtime % 60;
  const userScore = movie?.vote_average ? Math.ceil(movie.vote_average * 10) : 0;

  return (
    <>
      <Container fluid={true} className="mt-4">
        <Row className=" d-flex flex-column flex-md-row  bg-dark opacity-90 py-3 gap-2 text-white">
          {loading && <Col className="bg-dark text-white">Loading movie details...</Col>}
          {error && <Col className="bg-dark text-white">Failed to fetch movie details. Please try again later.</Col>}
          {!loading && !error && (
            <>
              <Col xs={12}  lg={3} className="d-flex flex-row  justify-content-center  mb-2 ">
                <img  
                  src={IMG_CDN_URL + poster_path}
                  alt={title} 
                  className="img-fluid rounded border"
                />
              </Col>
              <Col xs={12}  lg={8} className="d-flex flex-column justify-content-start gap-2 mb-2   border-start">
                <div>
                  <Link
                    to={homepage}
                    className="mt-3 fw-bolder fs-4 text-white cursor_pointer text-decoration-none hover-effect"
                    target="_blank"
                  >
                    {title} {title !== original_title && `(${original_title})`}
                  </Link>{" "}
                  - {runtime && <span className="ms-1">{hr} hr {min} min</span>}
                </div>
                <p>
                  <span className="me-1 ">Movie Type<span className="ms-1">:</span></span>
                  {
                    genres?.map((genre, index) => (
                      <Badge  pill bg="secondary" as={Link} onClick={()=>{dispatch(setCategoryPage(1))}}   to={`/movies/${genre.id}`} key={index} className="me-1  text-decoration-none hover-effect">
                        {genre.name}
                        
                      </Badge>
                    ))

                  }
                </p>
                <Button as={Col} xs={10} sm={6} md={4} className="btn btn-secondary" onClick={handleWatch} aria-label="Play Trailer">
                  <FaPlay /> Play Trailer
                </Button>
                <p className="mt-3 text-secondary fs-6">{tagline}</p>
                <div>
                  <h3>Overview</h3>
                  <p className="fst-italic">{overview}</p>
                  <div className="position-relative d-flex flex-row gap-2">
                    <span className="position-absolute m-4 align-self-center">{userScore}% </span>
                    <Circle percent={userScore} trailColor="#423d0f" trailWidth={4} strokeWidth={4} strokeColor="#d2d531" width="100"/>
                    <span className="align-self-center">User Score</span>
                  </div>
                </div>
                <div className="mt-3"> 
                  <p>Where to Watch <span>:</span> </p> 
                    <div className="d-flex flex-row gap-4"> 
                   {
                  watch_providers["IN"]?.["rent"]?.map((provider) => (
                      <img key={provider.provider_id} src={`${IMG_CDN_URL}${provider.logo_path}`} alt={provider.provider_name} height={"60px"} width={"60px"}/>
                  ))
                  }
                    </div>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
      <VideoTrailer id={movieId} show={modalShow} onHide={() => setModalShow(false)} title={title} />
    </>
  );
};

export default MovieDetail;
