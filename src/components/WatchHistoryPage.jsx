import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchHistory } from "../utils/watchHistorySlice";
import { Container,Row,Col } from "react-bootstrap";
import GridList from "./GridList";
import Error from "./Error";
import Loading from "./Loading";

const WatchHistoryPage = () => {
  const dispatch = useDispatch();
  const { movies, status,error } = useSelector((state) => state.watchHistory);

  useEffect(() => {
    dispatch(fetchWatchHistory());
  }, [dispatch]);

  return (
     <Container fluid={true} className="text-white g-0 overflow-hidden mx-2"> 
     <Row className="gap-3 ">
      {status === "loading" && <Loading/>}
      {status === "failed" && <Error error={error.message}/>}
      { status==="succeeded" && movies.length === 0 && <Col  className="text-white fs-4 ms-3">Your Watch History is empty!</Col>}
     {
      status==="succeeded" && movies.length>0 &&<GridList title="Your Watch History"  items={movies} people={false}/>
     }
    </Row>
    </Container>
  );
};

export default WatchHistoryPage;
