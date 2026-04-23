import { useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { Circle } from "rc-progress";
import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import useMovieDetail from "../hooks/useMovieDetail";
import VideoTrailer from "../components/Video/VideoTrailer";
import { addToWatchHistory } from "../store/watchHistorySlice";
import { setCategoryPage } from "../store/categorySlice";
import ReadMoreText from "../components/ReadMoreText";
import GoBack from "../components/GoBack";
import DetailPageTitle from "../components/MovieDetails/DetailPageTitle";
import DetailPageImage from "../components/MovieDetails/DetailPageImage";
import MovieChatBot from "../components/Chatbot/MovieChatBot";

const MovieDetail = () => {
  let { movieId } = useParams();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const movie = useSelector((store) => store?.movie?.viewedMovie);
  const country = useSelector((store) => store?.country?.country);
  const [error, loading] = useMovieDetail(movieId);

  const handleWatch = () => {
    setModalShow(true);
    dispatch(addToWatchHistory(movie));
  };

  const handleBadgeClick = () => {
    dispatch(setCategoryPage(1));
  };

  if (!movie) return null;

  const {
    original_title,
    genres,
    poster_path,
    tagline,
    overview = "No Overview Available",
    runtime,
    title,
    homepage,
    watch_providers = "No Watch Providers Available",
  } = movie;

  let hr = Math.floor(runtime / 60);
  let min = runtime % 60;
  const userScore = movie?.vote_average
    ? Math.ceil(movie.vote_average * 10)
    : 0;

  return (
    <>
      <Container fluid={true} className="mt-4">
        <GoBack />

        <Row className="d-flex flex-column flex-md-row bg-dark opacity-90 py-3 gap-2 text-white">
          {loading && (
            <Col className="bg-dark text-white">Loading movie details...</Col>
          )}
          {error && (
            <Col className="bg-dark text-white">
              Failed to fetch movie details. Please try again later.
            </Col>
          )}

          {!loading && !error && (
            <>
              <DetailPageImage profile_path={poster_path} name={title} />
              <Col
                xs={12}
                lg={8}
                className="d-flex flex-column justify-content-start gap-2 mb-2 border-start"
              >
                <div className="d-flex   align-items-center">
                  <DetailPageTitle
                    title={`${title}${title !== original_title ? ` (${original_title})` : ""}`}
                    homepage={homepage}
                  />
                </div>
                {runtime > 0 && (
                  <span>
                    Run Time :
                    <span className="ms-1">
                      {hr} hr {min} min
                    </span>
                  </span>
                )}

                <p>
                  <span className="me-1">
                    Movie Type<span className="ms-1">:</span>
                  </span>
                  {genres?.map((genre, index) => (
                    <Badge
                      pill
                      bg="secondary"
                      as={Link}
                      onClick={handleBadgeClick}
                      to={`/movies/${genre.id}`}
                      key={index}
                      className="me-1 text-decoration-none hover-effect"
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </p>

                <Button
                  as={Col}
                  xs={10}
                  sm={6}
                  md={4}
                  className="btn btn-secondary"
                  onClick={handleWatch}
                  aria-label="Play Trailer"
                >
                  <FaPlay /> Play Trailer
                </Button>

                <p className="mt-3 text-secondary fs-6">{tagline}</p>

                <div>
                  <h3>Overview</h3>
                  <p className="paragraph_text">
                    {<ReadMoreText text={overview} />}
                  </p>

                  <div className="position-relative d-flex flex-row gap-2">
                    <span className="position-absolute m-4 align-self-center">
                      {userScore}%
                    </span>
                    <Circle
                      percent={userScore}
                      trailColor="#423d0f"
                      trailWidth={4}
                      strokeWidth={4}
                      strokeColor="#d2d531"
                      width="100"
                    />
                    <span className="align-self-center">User Score</span>
                  </div>
                </div>

                <div className="mt-3">
                  <p>
                    Where to Watch <span>:</span>
                  </p>
                  <div className="d-flex flex-row gap-4 flex-wrap">
                    {watch_providers[country]?.["rent"]?.map((provider) => (
                      <img
                        key={provider.provider_id}
                        src={`${IMG_CDN_URL}${provider.logo_path}`}
                        alt={provider.provider_name}
                        height={"60px"}
                        width={"60px"}
                      />
                    ))}
                  </div>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>

      <VideoTrailer
        id={movieId}
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
      />

      <MovieChatBot/>
    </>
  );
};

export default MovieDetail;
