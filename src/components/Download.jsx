import { Button, Col, Container, Row } from "react-bootstrap";

const Download = () => {
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col className="text-center text-white bg-dark opacity-90 py-5">
          <p>To get app-like experience, download the APK below:</p>
          <Button
            as="a"
            href="https://drive.google.com/file/d/1ifizn27s4MLcTifapIUMooGjLNFMM7in/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
            className="mt-4"
          >
            Download
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
