import { Col, Container, Row } from "react-bootstrap";
import GenresCard from "./GenresCard";
import { useSelector } from "react-redux";
const Genres = () => {
     const  genres  = useSelector((state) => state?.movie?.genres);

    return <> 
     <Container fluid={true}> 
          <Row className="gap-4">
            <Col xs={12}> 
              <h2 className="text-white fs-4">Genres</h2> 
            </Col> 
            <Col xs={12} className="container_scroll d-flex flex-row gap-4"> 
            {
              genres?.map((item, index) => {
                return (
                  <GenresCard key={item?.id} src={item?.name+`.png`}  alt={item?.name} id={item?.id}/>
                )
              })
            }
            </Col>
            </Row>
     </Container>
    </>
};

export default Genres;