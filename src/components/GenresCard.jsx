
const GenresCard = ({src,alt}) => {
  return (
    <div className="position-relative">
      <img
        src={src}
        alt={alt}
        className=""
        style={{height:'220px' }}
      />
    </div>
  );
};

export default GenresCard;
