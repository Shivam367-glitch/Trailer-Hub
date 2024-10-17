import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Constants"
const MovieCard = (movie) => { 
  const navigate=useNavigate();
  const showDetails=()=>{
    localStorage.setItem('movieDetail',JSON.stringify(movie)); 
    navigate(`/movie/${movie.id}`);
  }
  return (
      <img src={IMG_CDN_URL+movie?.poster_path} alt=""className="img-fluid rounded" style={{height:"220px"}}
      onClick={showDetails}
      />
  )
}

export default MovieCard

