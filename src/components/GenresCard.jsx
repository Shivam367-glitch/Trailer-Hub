import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoryPage } from "../utils/categorySlice";

const GenresCard = ({src,alt,id}) => {
  const dispatch =  useDispatch();

  const handleLinkClick = () => {
  dispatch(setCategoryPage(1));
};
  return (
    <>
      <Link to={`/movies/${id}`} className="text-decoration-none text-white" onClick={handleLinkClick}>
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
