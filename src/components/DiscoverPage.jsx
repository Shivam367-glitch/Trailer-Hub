import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchDiscover } from "../utils/discoverSlice";
import List from "./List";
import GridList from "./GridList";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";

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
  if (status === "loading") {
     <div>Loading...</div>;
  }

  if(status === "failed") {
    return <div>{error}</div>;
  }

  return (
    // <div>
    //   <div className="movie-grid grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 ">
    //     <GridList title={endpoint} items={items} />
    //   </div>

    //   <div className="pagination flex justify-center items-center gap-4 mt-6">
    //     <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
    //       Prev
    //     </button>
    //     <span>Page {page} of {total_pages}</span>
    //     <button onClick={() => setPage((p) => Math.min(total_pages, p + 1))} disabled={page === total_pages}>
    //       Next
    //     </button>
    //   </div>
    // </div>

    <Container fluid={true} className="text-white  g-0">
      <Row className="m-0 p-0 g-0 gap-3">
        <Col xs={12} className="m-0 p-0">
          <GridList title={endpoint} items={items} people={people} />
        </Col> 
        <Col xs={12} className="m-0 p-0 text-center d-flex flex-row gap-3 justify-content-center align-items-center"> 
               <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="border-0  rounded-circle p-2">
                 <AiOutlineCaretLeft />

                </button>
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
