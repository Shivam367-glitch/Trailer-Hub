import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDiscover, setPage } from "../utils/discoverSlice";
import GridList from "./GridList";
import {  Container, Row } from "react-bootstrap";
import Title from "./Title";
import Loading from "./Loading";
import Error from "./Error";
import Pagination from "./Pagination";

const DiscoverPage = () => {
  const { endpoint } = useParams();
  const people=endpoint==="Popular People"
   
   const country=useSelector((store)=>store?.country?.country);
   const dispatch = useDispatch();
   const { items, total_pages, status, error,page } = useSelector((store) => store.discover);
   useEffect(() => {
     dispatch(fetchDiscover({country, page, endpoint,people}));
   }, [country, page, endpoint, dispatch]);
  return (
    <Container fluid={true} className="text-white  g-0 mx-2 overflow-hidden">
      <Row className="gap-3 mt-5"> 
      <Title title={people ? endpoint : `${endpoint} Movies`} />
       {status === "loading" && <Loading/>
       }
       {status === "failed" && <Error error={error} />} 
      { status!=="loading" && status !== "failed" && <GridList  items={items} people={people}  />}
        <Pagination page={page} total_pages={total_pages} setPage={setPage} />
      </Row>
    </Container>
  );
};

export default DiscoverPage;
