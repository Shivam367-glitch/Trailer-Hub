import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchHistory } from "../utils/watchHistorySlice";
import List from "./List";
import { Container,Row,Col } from "react-bootstrap";

const WatchHistoryPage = () => {
  const dispatch = useDispatch();
  const { movies, status,error } = useSelector((state) => state.watchHistory);

  useEffect(() => {
    dispatch(fetchWatchHistory());
  }, [dispatch]);

  return (
    <Container fluid={true} className="mt-2"> 
    <Row className="text-white fs-5">
      {status === "loading" && <Col>Loading...</Col>}
      {status === "failed" && <Col>{error.message}</Col>}
      { status==="succeeded" && movies.length === 0 && <Col>Your Watch History is empty!</Col>}
     {
      status==="succeeded" && movies.length>0 &&<Col><List title="Your Watch History"  movieList={movies} /></Col>
     }
    </Row>
    </Container>
  );
};

export default WatchHistoryPage;
