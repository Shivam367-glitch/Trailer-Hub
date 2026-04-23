import { memo } from 'react';
import {Col} from 'react-bootstrap';
const Error = ({error}) => {
  return (
    <Col xs={12} className="text-danger fs-4  p-3 my-3 bg-opacity-75 bg-dark text-center">{error}</Col>
  )
}

export default memo(Error);