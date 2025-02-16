import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; 
import usePeopleDetail from "../hooks/usePeopleDetail";
import { Button, Col, Container, Row } from "react-bootstrap";
import { IMG_CDN_URL } from "../utils/Constants";
const PeopleDetail = () => { 
    let { peopleId } = useParams();
    
    const viewedPeople = useSelector((store) => store?.people?.viewedPeople);
    console.log(viewedPeople);
    
    const [error, loading] = usePeopleDetail(peopleId);
    if (!viewedPeople ) return null;
  const {name,profile_path}=viewedPeople
  return (
    <> 
    <Container fluid={true} >
           <Row className=" d-flex flex-column flex-md-row  bg-dark opacity-90 py-3 gap-2 text-white">
             {loading && <Col className="bg-dark text-white">Loading movie details...</Col>}
             {error && <Col className="bg-dark text-white">Failed to fetch movie details. Please try again later.</Col>}
             {!loading && !error && (
               <>
                 <Col xs={12} md={3} lg={3} className="d-flex flex-row  justify-content-center ">
                   <h1>{name}</h1>
                   <img  
                     src={IMG_CDN_URL + profile_path}
                     alt={name} 
                     className="img-fluid rounded border"
                   />
                 </Col>
                 </>)}
            </Row>
                 </Container>
    </>
  )
}

export default PeopleDetail