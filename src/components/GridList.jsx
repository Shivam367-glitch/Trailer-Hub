import { Col } from "react-bootstrap";
import Card from "./Card";
import Error from "./Error";
import { getImagePath } from "../utils/common";
const GridList = ({ items, people }) => {

  const noDataMessage = people ? "No People Found" : "No Movies Found";

  return (
    <Col
      xs={12}
      className="d-flex flex-row gap-2 gap-md-auto flex-wrap justify-content-around justify-content-md-center justify-content-lg-start my-3 text-white"
    >
      {!items  || items.length === 0 ? (
        <Error error={noDataMessage} />
      ) : (
        items.map((item, ind) => (
          <Card
            key={ind}
            id={item?.id}
            img={getImagePath(item, people)}
            directTo={`/${people ? "people" : "movie"}/${item.id}`}
          />
        ))
      )}
    </Col>
  );
};

export default GridList;
