import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchHistory } from "../utils/watchHistorySlice";
import List from "./List";
import { Container,Row,Col } from "react-bootstrap";

const WatchHistoryPage = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.watchHistory);

  useEffect(() => {
    dispatch(fetchWatchHistory());
  }, [dispatch]);

  if (movies.length === 0) return <p className="text-white">Your Watch History is empty!</p>;
  
  if (status === "loading") return <p className="text-white">Loading...</p>;
  return (
    <Container fluid={true} className="mt-2"> 
    <Row >
      <Col>
            <List title="Your Watch History"  movieList={movies} />
      </Col>
    </Row>
    </Container>
  );
};

export default WatchHistoryPage;
