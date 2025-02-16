import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../utils/peopleSlice";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import List from "./List";

const People = () => {
  const dispatch = useDispatch();
  const { peopleList, status, error } = useSelector((state) => state.people);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchPeople(query));
    }
  };

  return (
    <>
      <Container fluid={true} className="text-center">
        <Row as={Form} className="m-0 p-0 mt-5 align-items-center justify-content-center  ">
          <h2 className="text-white ">Search People</h2>
          <Col xs={7} sm={6} lg={4} className="m-0 p-0 mt-2">
            <input
              type="text"
              className="rounded-2 p-2 border-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for an actor/actress..."
              style={{width: "100%"}}
            />
          </Col>
          <Col xs={5} sm={3} lg={2} className="mx-0  mt-2">
            <Button
              variant="danger"
              onClick={handleSearch}
              disabled={status === "loading"}
              className="p-2"
              style={{width: "100%"}}
            >
              {status === "loading" ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Search"
              )}
            </Button>
          </Col>
          {status === "failed" && (
            <Col className="text-danger mt-3 fs-5 text-white">{error}</Col>
          )}
          {status === "succeeded" && peopleList.length === 0 && (
            <h2 className="text-white">No results found</h2>
          )}
        </Row>

        {status === "succeeded" && peopleList.length > 0 && (
          <Row>
            <List title={"People"} peopleList={peopleList} showGptSearch={false} />
          </Row>
        )}
      </Container>
    </>
  );
};

export default People;
