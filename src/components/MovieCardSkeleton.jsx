import { Card, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const MovieCardSkeleton = () => {
  return (
    <Col md={2} className="mb-4 rounded-4"  style={{height:"220px" ,width:"145px",backgroundColor:"silver"}} >
      <Card style={{backgroundColor:"silver"}} className=' border-0'>
        <Skeleton height={220} baseColor={"silver"} />
        <Card.Body>
          <Skeleton height={20} width="80%" />
          <Skeleton height={15} width="60%" />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCardSkeleton;
