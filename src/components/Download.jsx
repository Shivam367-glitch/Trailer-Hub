
import { Button, Col, Container, Row } from "react-bootstrap";
import { APP_URL } from "../utils/Constants";
import {QRCodeCanvas} from 'qrcode.react'; 

const Download = () => {

  return (
    <Container fluid className="bg-dark text-white mt-4 px-3 px-md-5">
      <Row className="justify-content-center align-items-center py-5 flex-column flex-md-row gap-3 gap-md-0">
      
        <Col md={6} className="text-center">
          <img
            src="trailer-preview.png"
            alt="App Preview"
            className="img-fluid"
            style={{ maxHeight: "500px" }}
          />
        </Col>

        <Col md={6} className="d-flex flex-column gap-2 text-center text-md-start ">
          <h1 className="display-6 fw-bold mb-3">Download Our App</h1>
          <p className=" mb-4">
             Watch the latest movie trailers — anytime, anywhere. Stay updated with what’s coming next in cinema.
          </p>

         <div className="d-flex  justify-content-center justify-content-md-start gap-5">

          <QRCodeCanvas
        value={APP_URL}
        size={128}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H" 
        marginSize={4}
      />
           <Button
            as="a"
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
            size="lg"
            className="me-3 mb-2 align-self-center "
          >
            Download Now
          </Button>
         </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
