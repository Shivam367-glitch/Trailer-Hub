import { Col } from "react-bootstrap";
import { IMG_CDN_URL } from "../utils/constant";
import { memo } from "react";

const DetailPageImage = ({ profile_path, name }) => {
  return (
    <Col
      xs={12}
      lg={3}
      className="d-flex flex-row  justify-content-center  mb-2 "
    >
      <img
        src={IMG_CDN_URL + profile_path}
        alt={name}
        className="img-fluid rounded-4 border"
        style={{ maxHeight: "500px" }}
      />
    </Col>
  );
};

export default memo(DetailPageImage);
