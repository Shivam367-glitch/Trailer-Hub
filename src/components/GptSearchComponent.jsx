import { Col, Container, Row } from "react-bootstrap"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"
import React from "react";

const GptSearchComponent = () => { 
  const  showshowGptSearch=useSelector((store)=>store?.gpt?.showGptSearch); 
  const recommendedMovies=useSelector((store)=>store?.gpt?.recommendedMovies);
  if(recommendedMovies==null || recommendedMovies.length==0)return


  return (
     <Container fluid={true} className=" display-1 text-dark position-absolute  z-2">
        <Row className="gap-4 d-flex flex-column">
          <Col  className="mt-5">
            <MovieList title={"Recommended Movies"} movieList={""}   showGptSearch={showshowGptSearch}/>
          </Col>
        </Row>
     </Container>
  )
}

export default React.memo(GptSearchComponent);