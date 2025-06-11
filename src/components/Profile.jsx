import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { Button, Col, Container, Row } from "react-bootstrap";
const Profile = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}
          className="text-center bg-dark bg-opacity-75 text-danger gap-3 d-flex flex-column justify-content-center align-items-center py-4"
        >
          <img
            src={auth?.currentUser?.photoURL || "/person.png"}
            alt={auth?.currentUser?.displayName || "User"}
            className="img-fluid rounded"
          />
          <p className="mb-0">
            <strong>Name</strong>{" : "}
            {auth?.currentUser?.displayName || "Anonymous"}
          </p> 
           <p className="mb-0">
            <strong>Email</strong>{" : "}
            {auth?.currentUser?.email}
          </p>
         <Button as={Link}  to="/password-reset"variant="danger">
          Change Password
        </Button>
        </Col> 
      </Row>
    </Container>
  );
};

export default Profile;
