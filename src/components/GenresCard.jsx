import { Link } from "react-router-dom";

const GenresCard = ({src,alt,id}) => {
  return (
    <div className="position-relative">
      <Link to={`/movies/${id}`} className="text-decoration-none text-white">
      <img
        src={src}
        alt={alt}
        className="m-md-3"
        style={{height:'220px' }}
      />
      </Link>
    </div>
  );
};

export default GenresCard;
