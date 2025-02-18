import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"; 
import usePeopleDetail from "../hooks/usePeopleDetail";
import {  Col, Container, Row } from "react-bootstrap";
import { IMG_CDN_URL } from "../utils/Constants";
import {Cake2Fill} from "react-bootstrap-icons"
const PeopleDetail = () => { 
    let { peopleId } = useParams();
    
    const viewedPeople = useSelector((store) => store?.people?.viewedPeople);
    console.log(viewedPeople);
    
    const [error, loading] = usePeopleDetail(peopleId);
    if (!viewedPeople ) return null;
  const {name,profile_path,biography,homepage,birthday,place_of_birth}=viewedPeople
  return (
    <> 
    <Container fluid={true} >
           <Row className=" d-flex flex-column flex-md-row  bg-dark opacity-90 py-3 gap-2 text-white">
             {loading && <Col className="bg-dark text-white">Loading People details...</Col>}
             {error && <Col className="bg-dark text-white">Failed to fetch People details. Please try again later.</Col>}
             {!loading && !error && (
            <>
              <Col xs={12} md={3} lg={3} className="d-flex flex-row  justify-content-center ">
                <img  
                  src={IMG_CDN_URL + profile_path}
                  alt={name} 
                  className="img-fluid rounded border"
                />
              </Col>
              <Col xs={12} md={8} lg={8} className=" d-flex flex-column justify-content-start gap-2 mb-2 border border-success">  
              <p className="mt-3 fw-bolder fs-4 text-white text-center">{homepage ? (
                <Link to={homepage} target="_blank" className="cursor_pointer text-decoration-underline text-white">{name}</Link>
              ) : (<span>{name}</span>)}
              </p> 
              <p className="d-flex flex-row justify-content-between"><span>Born On: {new Date(birthday).toLocaleDateString("en-US").replace(/\//g, '-')}  </span><span> Born At : {place_of_birth}</span> </p>
              <p className="text-white">
              {biography}
              </p>
              </Col>
            </>
          )}
            </Row>
         </Container>
    </>
  )
}

export default PeopleDetail