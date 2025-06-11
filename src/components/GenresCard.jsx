import { Link } from "react-router-dom";

const GenresCard = ({src,alt,id}) => {
  return (
    <>
      <Link to={`/movies/${id}`} className="text-decoration-none text-white">
      <img
        src={src}
        alt={alt}
        className="m-md-3 rounded-4"
        style={{height:'220px' }}
      />
      </Link>
    </>
  );
};

export default GenresCard;
