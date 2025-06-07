import { memo } from "react" 
import { Col } from "react-bootstrap"
const Title = ({title}) => {
  return (
    <Col xs={12}>
      <h2 className="text-white fs-4 ms-4">{title?.replace("_"," ").toUpperCase()}</h2>
    </Col>
  )
}

export default memo(Title)