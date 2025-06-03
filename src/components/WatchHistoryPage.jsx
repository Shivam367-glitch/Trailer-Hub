import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchHistory } from "../utils/watchHistorySlice";
import { Container,Row,Col } from "react-bootstrap";
import GridList from "./GridList";

const WatchHistoryPage = () => {
  const dispatch = useDispatch();
  const { movies, status,error } = useSelector((state) => state.watchHistory);

  useEffect(() => {
    dispatch(fetchWatchHistory());
  }, [dispatch]);

  return (
     <Container fluid={true} className="text-white g-0 overflow-hidden mx-2"> 
     <Row className="gap-3 ">
      {status === "loading" && <Col xs={12}>Loading...</Col>}
      {status === "failed" && <Col xs={12}>{error.message}</Col>}
      { status==="succeeded" && movies.length === 0 && <Col>Your Watch History is empty!</Col>}
     {
      status==="succeeded" && movies.length>0 &&<Col xs={12} className="m-0 p-0"><GridList title="Your Watch History"  items={movies} people={false}/></Col>
     }
    </Row>
    </Container>
  );
};

export default WatchHistoryPage;
