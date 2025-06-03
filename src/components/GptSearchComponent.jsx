import { Col, Container, Row } from "react-bootstrap"
import List from "./List"
import { useSelector } from "react-redux"
import React from "react";
import GridList from "./GridList";


const GptSearchComponent = () => { 
  // const  showshowGptSearch=useSelector((store)=>store?.gpt?.showGptSearch); 
  const recommendedMovies=useSelector((store)=>store?.gpt?.recommendedMovies);
  if(recommendedMovies==null || recommendedMovies.length==0)return

  let movieList = [];
  recommendedMovies.forEach((movies) => { 
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