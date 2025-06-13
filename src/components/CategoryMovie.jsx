import { useDispatch, useSelector } from "react-redux"
import useGenreMovies from "../hooks/useGenreMovies"
import GridList from "./GridList";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";
import Error from "./Error";
import Loading from "./Loading";
import { setCategoryPage } from "../utils/categorySlice";
 
 
const CategoryMovie = () => {
  const {movies,total_pages,page}=useSelector((store) => store?.category);
  const id=useSelector((store) => store?.category?.id);
  const genres=useSelector((store) => store?.movie?.genres);
  const genreName=genres?.find((item) => item?.id === Number(id))?.name;
  const[loading,error]=useGenreMovies(page);
  const dispatch = useDispatch();
  return (
    <Container fluid={true} className="g-0">
      <Row className="g-0 mt-5"> 
      <Title title={genreName+" "+"Movies"} />
      {loading && <Loading/>}
      {error && <Error error={error}/>}
      { !loading && !error && <GridList  items={movies} people={false} />}

      <Col xs={12} className="m-0 p-0 text-center d-flex flex-row gap-3 justify-content-center align-items-center text-white"> 
               <button onClick={() => dispatch(setCategoryPage(Math.max(1, page - 1)))} disabled={page === 1} className="border-0 rounded-circle p-2"><AiOutlineCaretLeft /></button>
                <span>{page} / {total_pages}</span>
                <button onClick={() => dispatch(setCategoryPage(Math.min(total_pages, page + 1)))} disabled={page === total_pages} className="border-0  rounded-circle p-2">
                 <AiOutlineCaretRight/>
                </button>
      </Col>
      </Row>
    </Container>
  )
}

export default CategoryMovie