import { Button, Col, Container, Row } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { hideGpt, toggleGpt } from "../utils/gptSlice";
import { useState } from "react";
import Profile from "./Profile";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const isMoviePage = matchPath({ path: "/movie/:id" }, location.pathname);
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (auth.currentUser) {
      signOut(auth)
        .then(() => {
          if (showGptSearch) dispatch(hideGpt());
          navigate("/logout");
        })
        .catch((error) => {
          alert("Error while Sign Out!");
        });
    } else {
      // navigate('/')
    }
  };
  return (
    <Container fluid={true} className="header_container z-2 py-2 overflow-hidden">
      <Row className="d-flex flex-row   align-items-center border border-success">
        <Col  lg={3} >
          <img
            src="logo.png" alt="logo"
            className="img-fluid w-50"
          />
        </Col>
        <Col lg={3} className="border border-danger">
          {user && (
            <Link as={Button} to="/people" className="text-decoration-none fs-3">
              People
            </Link>
          )}
        </Col>
        <Col className="d-flex flex-row  gap-2 justify-content-around align-items-center border border-black flex-wrap">
          {(showGptSearch || isMoviePage) && (
            <Link
              to="/browser"
              onClick={() => {
                dispatch(hideGpt());
              }}
              className="text-danger home_link"
            >
              Home
            </Link>
          )}
          {user && (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="img-fluid user_icon "
              onClick={() => {
                setShow(!show);
              }}
            />
          )}
          {user && (
            <Button
              as={Link}
              to={"/watch-history"}
              className="bg-info fw-medium border-0"
            >
              Watch History
            </Button>
          )}
          {show && (
            <Button className="bg-info fw-medium border-0">
              <Profile />
            </Button>
          )}
          {user && (
            <Button
              as={Link}
              to={"/browser"}
              onClick={() => {
                dispatch(toggleGpt(true));
              }}
              className="bg-info fw-medium border-0"
            >
              AI Search
            </Button>
          )}
          <Button
            as={Link}
            onClick={handleLogOut}
            variant="danger"
            className="fw-medium text-white  rounded-3"
          >
            {user ? "Sign Out" : "Sign In"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
