import { Col, Container, Row } from "react-bootstrap"
import Card from "./Card";
import { IMG_CDN_URL } from "../utils/Constants"


const List = ({ title, movieList,peopleList }) => { 

  return (
    <Container fluid={true}> 
      <Row className="gap-4">
        <Col xs={12}> 
          <h2 className="text-white fs-4">{title}</h2> 
        </Col> 
         {
            movieList&& <Col xs={12} className="container_scroll d-flex flex-row gap-4"> 
            {movieList?.map((movie, ind) => (<Card key={ind} id={movie?.id} img={movie?.poster_path?IMG_CDN_URL+movie.poster_path:""} directTo={`/movie/${movie.id}`} />))}
          </Col>
         }
       { 
          peopleList && <Col xs={12} className="container_scroll d-flex flex-row gap-4"> 
            {peopleList?.map((person, ind) => (<Card key={ind} id={person?.id} img={person?.profile_path?IMG_CDN_URL+person.profile_path:"/person.png"} directTo={`/people/${person.id}`} />))}
          </Col>
      }
      </Row>
    </Container>
  );
}

export default List;
