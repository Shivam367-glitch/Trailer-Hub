import {Col} from   "react-bootstrap";
import MovieCardSkeleton from "./MovieCardSkeleton";
const Loading = () => {
  return (
    <Col xs={12} className="text-white fs-4  ms-3 d-flex flex-wrap gap-4">  {Array.from({ length: 20 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}</Col>
  )
}

export default Loading