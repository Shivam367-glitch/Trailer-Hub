import { useSelector } from "react-redux"
import useGenreMovies from "../hooks/useGenreMovies"
import GridList from "./GridList";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";
import Error from "./Error";
import Loading from "./Loading";

 
const CategoryMovie = () => {
  const {movies,total_pages}=useSelector((store) => store?.category);
  const id=useSelector((store) => store?.category?.id);
  const genres=useSelector((store) => store?.movie?.genres);
  const genreName=genres?.find((item) => item?.id === Number(id))?.name;
  const[page,setPage]=useState(1);
  const[loading,error]=useGenreMovies(page);
 
  return (
    <Container fluid={true} className="g-0">
      <Row className="g-0 mt-5"> 
      <Title title={genreName+" "+"Movies"} />
      {loading && <Loading/>}
      {error && <Error error={error}/>}
      { !loading && !error && <GridList  items={movies} people={false} />}
      
      <Col xs={12} className="m-0 p-0 text-center d-flex flex-row gap-3 justify-content-center align-items-center text-white"> 
               <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="border-0 rounded-circle p-2"><AiOutlineCaretLeft /></button>
                <span>{page} / {total_pages}</span>
                <button onClick={() => setPage((p) => Math.min(total_pages, p + 1))} disabled={page === total_pages} className="border-0  rounded-circle p-2">
                 <AiOutlineCaretRight/>
                </button>
      </Col>
      </Row>
    </Container>
  )
}

export default CategoryMovie