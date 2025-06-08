import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchDiscover } from "../utils/discoverSlice";
import GridList from "./GridList";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";
import Title from "./Title";
import Loading from "./Loading";
import Error from "./Error";

const DiscoverPage = () => {
  const { endpoint } = useParams();
  const people=endpoint==="Popular People"
  
  const [page, setPage] = useState(1);
   const country=useSelector((store)=>store?.country?.country);
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiscover({country, page, endpoint,people}));
  }, [country, page, endpoint, dispatch]);

  const { items, total_pages, status, error } = useSelector((store) => store.discover);
  return (
    <Container fluid={true} className="text-white  g-0 mx-2 overflow-hidden">
      <Row className="gap-3 mt-5"> 
      <Title title={people ? endpoint : `${endpoint} Movies`} />
       {status === "loading" && <Loading/>
       }
       {status === "failed" && <Error error={error} />} 
        { status!=="loading" && status !== "failed" && <GridList  items={items} people={people}  />}
        <Col xs={12} className="m-0 p-0 text-center d-flex flex-row gap-3 justify-content-center align-items-center"> 
               <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="border-0 rounded-circle p-2"><AiOutlineCaretLeft /></button>
                <span>{page} / {total_pages}</span>
                <button onClick={() => setPage((p) => Math.min(total_pages, p + 1))} disabled={page === total_pages} className="border-0  rounded-circle p-2">
                 <AiOutlineCaretRight/>
                </button>
        </Col>
      </Row>

    </Container>
  );
};

export default DiscoverPage;
