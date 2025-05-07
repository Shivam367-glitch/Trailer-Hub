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
              {/* <GenresCard src={"Action.png"}/> 
              <GenresCard src={"Documentary.png"}/> 
              <GenresCard src={"Comedy.png"}/> 
              <GenresCard src={"Adventure.png"}/> 
              <GenresCard src={"Animation.png"}/> 
              <GenresCard src={"Drama.png"}/> 
              <GenresCard src={"Crime.png"}/> 
              <GenresCard src={"Family.png"}/>
              <GenresCard src={"Fantasy.png"}/> 
              <GenresCard src={"Horror.png"}/> 
              <GenresCard src={"History.png"}/> 
              <GenresCard src={"Mystery.png"}/> 
              <GenresCard  src={"Music.png"}/> 
              <GenresCard src={"Romance.png"}/> 
              <GenresCard src={"Science.png"}/>
              <GenresCard src={"TV.png"}/>
              <GenresCard src={"Thriller.png"}/>
              <GenresCard src={"War.png"}/> */}
            </Col>
            </Row>
     </Container>
    </>
};

export default Genres;