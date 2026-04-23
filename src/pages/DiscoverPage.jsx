import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDiscover, setPage } from "../store/discoverSlice";
import GridList from "../components/GridList";
import {  Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Pagination from "../components/Pagination";
import { getDiscoverParams } from "../utils/discoverParams";

const DiscoverPage = () => {
  const { endpoint } = useParams();
  const people=endpoint==="Popular People"
  
   
   const country=useSelector((store)=>store?.country?.country);
   const dispatch = useDispatch(); 

   const additionalParams = getDiscoverParams(endpoint);
   const { items, total_pages, status, error,page } = useSelector((store) => store.discover);
   useEffect(() => {
      dispatch(fetchDiscover({
      country,
      page,
      endpoint,
      people,
      additionalParams: additionalParams,
    }));
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
