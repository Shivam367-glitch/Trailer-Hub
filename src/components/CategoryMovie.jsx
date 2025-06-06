import { useSelector } from "react-redux"
import useGenreMovies from "../hooks/useGenreMovies"
import GridList from "./GridList";

 
const CategoryMovie = () => {
  const[loading,error]=useGenreMovies()
  const movies=useSelector((store) => store?.category?.movies);
  const id=useSelector((store) => store?.category?.id);
  const genres=useSelector((store) => store?.movie?.genres);
  const genreName=genres?.find((item) => item?.id === Number(id))?.name;

  if(loading)return <span className="text-white fs-4 ms-2">Loading...</span>
  if(error)return <span className="text-white fs-4 ms-2">{error}</span>
  return (
   <GridList title={genreName+" "+"Movies"} items={movies} people={false} />
  )
}

export default CategoryMovie