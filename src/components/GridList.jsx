import { Col } from "react-bootstrap";
import Card from "./Card";
import { IMG_CDN_URL } from "../utils/Constants";

const GridList = ({ items, people }) => {
  const getImagePath = (item) =>
    people
      ? item?.profile_path
        ? IMG_CDN_URL + item.profile_path
        : "/person.png"
      : item?.poster_path
      ? IMG_CDN_URL + item.poster_path
      : "";

  const noDataMessage = people ? "No People Found" : "No Movies Found";

  return (
    <Col
      xs={12}
      className="d-flex flex-row gap-2 gap-md-auto flex-wrap justify-content-around justify-content-md-center justify-content-lg-start my-3 text-white"
    >
      {!items  || items.length === 0 ? (
        noDataMessage
      ) : (
        items.map((item, ind) => (
          <Card
            key={ind}
            id={item?.id}
            img={getImagePath(item)}
            directTo={`/${people ? "people" : "movie"}/${item.id}`}
          />
        ))
      )}
    </Col>
  );
};

export default GridList;
