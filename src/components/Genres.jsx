import { Col, Container, Row } from "react-bootstrap";
import GenresCard from "./GenresCard";

const Genres = () => {
   

    return <> 
     <Container fluid={true}> 
          <Row className="gap-4">
            <Col xs={12}> 
              <h2 className="text-white fs-4">Genres</h2> 
            </Col> 
            <Col xs={12} className="container_scroll d-flex flex-row gap-4"> 
              <GenresCard src={"Action.png"}/> 
              <GenresCard src={"Documentary.png"}/> 
              <GenresCard src={"Comedy.png"}/> 
              <GenresCard src={"Adventure.png"}/> 
              <GenresCard src={"Animation.png"}/> 
              <GenresCard/> 
              <GenresCard/> 
              <GenresCard/>
              <GenresCard/> 
              <GenresCard/> 
              <GenresCard/> 
              <GenresCard/> 
              <GenresCard/> 
              <GenresCard/> 
              <GenresCard/> 
              <GenresCard/>
            </Col>
            </Row>
            </Container>

    </>
};

export default Genres;