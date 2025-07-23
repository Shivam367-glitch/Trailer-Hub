import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import { IMG_CDN_URL } from "../utils/Constants";
import { Link, useLocation } from "react-router-dom";
import { setPage } from "../utils/discoverSlice";
import { useDispatch } from "react-redux";

const List = ({ title, movieList, peopleList }) => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const isBrowser = path === "/browser";
  const displayList = movieList || peopleList;
  const isPeople = !!peopleList;

  const getImagePath = (item) =>
    isPeople
      ? item?.profile_path
        ? IMG_CDN_URL + item.profile_path
        : "/person.png"
      : item?.poster_path
      ? IMG_CDN_URL + item.poster_path
      : "";

  return (
    <Container fluid>
      <Row className="gap-4">
        <Col xs={12}>
          <h2 className="text-white fs-4 d-flex justify-content-between align-items-center">
            {title.replace("_", " ").toUpperCase()}
            {isBrowser && (
              <Link
                to={`/discover/${title}`}
                onClick={() => dispatch(setPage(1))}
              >
                <img
                  src="view-more.png"
                  alt="View More"
                  className="border border-danger rounded-circle bg-danger"
                />
              </Link>
            )}
          </h2>
        </Col>

      {displayList && (
        <Col xs={12} className="container_scroll d-flex flex-row gap-4">
    {displayList.length > 0 ? (
      displayList.map((item, ind) => (
        <Card
          key={ind}
          id={item?.id}
          img={getImagePath(item)}
          directTo={`/${isPeople ? "people" : "movie"}/${item.id}`}
        />
      ))
    ) : (
      <p className="text-white">No items found</p>
    )}
        </Col>
     )}
      </Row>
    </Container>
  );
};

export default List;
