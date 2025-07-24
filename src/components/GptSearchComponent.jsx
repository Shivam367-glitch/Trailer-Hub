

import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import React from "react";
import GridList from "./GridList";


const GptSearchComponent = () => { 
  const recommendedMovies=useSelector((store)=>store?.gpt?.recommendedMovies);
  if(recommendedMovies==null || recommendedMovies.length==0)return

  let movieList = [];
  recommendedMovies.forEach((movies) => {  
    if(movies==null || movies.length==0) return;
    movies.forEach((movie)=>{
      movieList.push(movie);
    })
  });

  return (
     <Container fluid={true}>
        <Row>
          <Col >  
             <GridList title={"Recommended Movies"} items={movieList} people={false}/>
          </Col>
        </Row>
     </Container>
  )
}

export default React.memo(GptSearchComponent);