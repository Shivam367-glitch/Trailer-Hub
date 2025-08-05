import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { setPage } from "../utils/discoverSlice";
import { useDispatch } from "react-redux";
import Error from "./Error";
import { getImagePath } from "../utils/common";

const List = ({ title, movieList, peopleList,error=null }) => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const isBrowser = path === "/browser";
  const displayList = movieList || peopleList;
  const people = !!peopleList;


  const handleLinkClick = () => {
    dispatch(setPage(1));
  };
  return (
    <Container fluid>
      <Row className="gap-4">
        <Col xs={12}>
          <h2 className="text-white fs-4 d-flex justify-content-between align-items-center">
            {title.replace("_", " ").toUpperCase()}
            {isBrowser && (
              <Link
                to={`/discover/${title}`}
                onClick={handleLinkClick}
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
        {error && <Error error={error} />}
        {!error && !displayList && (
          <Error error={people ? "No People Found" : "No Movies Found"} />
        )}
        {displayList && (
          <Col xs={12} className="container_scroll d-flex flex-row gap-4">
            {displayList.length > 0 ? (
              displayList.map((item, ind) => (
                <Card
                  key={ind}
                  id={item?.id}
                  img={getImagePath(item, people)}
                  directTo={`/${people ? "people" : "movie"}/${item.id}`}
                />
              ))
            ) : null}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default List;
