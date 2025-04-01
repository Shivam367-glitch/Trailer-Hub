import { Card } from 'react-bootstrap';

const GenresCard = ({src}) => {
  return (
    <div className="position-relative">
      <img
        src={src}
        alt="Action Genre"
        className=""
        style={{height:'220px' }}
      />
     
   
    </div>
  );
};

export default GenresCard;
