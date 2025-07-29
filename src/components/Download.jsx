import { Button, Col, Container, Row } from "react-bootstrap";

const Download = () => {
  return (
    <Container fluid className="bg-dark text-white mt-4">
      <Row className="justify-content-center align-items-center text-center  py-5">
        <Col md={8}>
          <h1 className="display-6 fw-bold mb-3">Get Our Movie Trailer App</h1>
          <p className="lead mb-4">
            Watch the latest movie trailers — anytime, anywhere. Stay updated with what’s coming next in cinema.
          </p>

          <Button
            as="a"
            href="https://drive.google.com/file/d/1ifizn27s4MLcTifapIUMooGjLNFMM7in/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
            size="lg"
            className="px-4"
          >
            Download Now
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <img
            src="trailer-preview.png"
            alt="App Preview"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
