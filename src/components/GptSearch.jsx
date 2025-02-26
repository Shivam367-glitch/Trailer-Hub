import GptSearchBar from "./GptSearchBar"
import GptSearchComponent from "./GptSearchComponent"
import React from "react" 

import {Container} from "react-bootstrap" 


const GptSearch = () => {
  return (
    <Container fluid={true} className="m-0 p-0"> 
        <GptSearchBar/>
        <GptSearchComponent/>
    </Container>
  )
}

export default React.memo(GptSearch)