import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../utils/peopleSlice";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import GridList from "./GridList";
import Error from "./Error";

const PeopleSearch = () => {
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
      <Container fluid={true}>
        <Row as={Form} className="m-0 p-0 mt-5 align-items-center justify-content-center  ">
          <h2 className="text-white text-center">Search People</h2>
          <Col xs={7} sm={6} lg={4} className="m-0 p-0 mt-3">
            <input
              type="text"
              className="rounded-2 p-2 border-none w-100"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for an actor/actress..."
            />
          </Col>
          <Col xs={5} sm={3} lg={2} className="mx-0  mt-3">
            <Button
              variant="danger"
              onClick={handleSearch}
              disabled={status === "loading"}
              className="p-2 w-100"
            >
              {status === "loading" ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Search"
              )}
            </Button>
          </Col>
          {status === "failed" &&  <Error error={error}/>}
          {status === "succeeded" && peopleList.length === 0 && (
            <h2 className="text-white">No results found</h2>
          )}
        </Row>

        {status === "succeeded" && peopleList.length > 0 && (
          <Row className="g-0">
            <Col xs={12} className="m-0 p-0 ">
            <GridList title={"People"} items={peopleList}  people={true} />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default PeopleSearch;
