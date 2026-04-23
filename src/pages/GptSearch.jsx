import GptSearchBar from "../components/Search/GptSearchBar"
import GptSearchComponent from "../components/Search/GptSearchComponent"
import {memo} from "react" 
import {Container} from "react-bootstrap" 


const GptSearch = () => {
  return (
    <Container fluid={true} className="m-0 p-0"> 
        <GptSearchBar/>
        <GptSearchComponent/>
    </Container>
  )
}

export default memo(GptSearch)