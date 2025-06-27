import { useDispatch, useSelector } from "react-redux"
import useGenreMovies from "../hooks/useGenreMovies"
import GridList from "./GridList";
import Title from "./Title";
import { Container, Row } from "react-bootstrap";
import Error from "./Error";
import Loading from "./Loading";
import { setCategoryPage } from "../utils/categorySlice";
import Pagination from "./Pagination";
 
const CategoryMovie = () => {
  const {movies,total_pages,page}=useSelector((store) => store?.category);
  const id=useSelector((store) => store?.category?.id);
  const genres=useSelector((store) => store?.movie?.genres);
  const genreName=genres?.find((item) => item?.id === Number(id))?.name;
  const[loading,error]=useGenreMovies(page);
  return (
    <Container fluid={true} className="g-0">
      <Row className="g-0 mt-5"> 
      <Title title={genreName+" "+"Movies"} />
      {loading && <Loading/>}
      {error && <Error error={error}/>}
      { !loading && !error && <GridList  items={movies} people={false} />}

      
      <Pagination page={page} total_pages={total_pages} setPage={setCategoryPage} />  
      </Row>
    </Container>
  )
}

export default CategoryMovie