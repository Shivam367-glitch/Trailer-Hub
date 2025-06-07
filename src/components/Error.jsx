import { memo } from 'react';
import {Col} from 'react-bootstrap';
const Error = ({error}) => {
  return (
    <Col xs={12} className="text-danger fs-4 ms-3">{error}</Col>
  )
}

export default memo(Error);