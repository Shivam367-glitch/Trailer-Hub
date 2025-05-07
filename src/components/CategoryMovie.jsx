import { useSelector } from "react-redux"
import useGenreMovies from "../hooks/useGenreMovies"
import List from "./List";

 
const CategoryMovie = () => {
  const[loading,error]=useGenreMovies()
  const movies=useSelector((store) => store?.category?.movies);
  

  if(loading)return <span className="text-white fs-4 ms-2">Loading...</span>
  if(error)return <span className="text-white fs-4 ms-2">{error}</span>
  return (
   <List title={"Movies"} movieList={movies} peopleList={null} />
  )
}

export default CategoryMovie