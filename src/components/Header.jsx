import { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { setCategoryPage } from "../utils/categorySlice";

function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleCloseMenu = () => {
    if (showOffcanvas) {
      setShowOffcanvas(false);
    }
  };
  const handleOpenMenu = () => setShowOffcanvas(true);

  const handleClick = () => {
    dispatch(setCategoryPage(1));
    handleCloseMenu();
  };

  const links = [
    { url: "/profile", name: "Profile" },
    { url: "/logout", name: "Log Out" },
  ];

  const Genres = useSelector((store) => store?.movie?.genres);
  const genreLinks = useMemo(
    () =>
      (Genres ?? []).map((genre) => ({
        url: `/movies/${genre.id}`,
        name: genre.name,
      })),
    [Genres]
  );

  return (
    <>
      <Navbar
        expand={"md"}
        className="bg-secondary bg-opacity-50 z-3 d-flex flex-row"
      >
        <Container fluid={true}>
          <Navbar.Brand as={NavLink} to={user ? "/browser" : "/"}>
            <img
              src="logo.png"
              alt="Trailer Hub Logo"
              className="img-fluid logo"
            />
          </Navbar.Brand>
          {user && (
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleOpenMenu}
            />
          )}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            show={showOffcanvas}
            onHide={handleCloseMenu}
              >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img
                  src="logo.png"
                  alt="Trailer Hub Logo"
                  className="img-fluid logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>

            {user && (
              <Offcanvas.Body className="d-flex flex-row justify-content-center ">
                <Nav className="justify-content-start flex-grow-1 fw-bolder">
                  <Nav.Link
                    as={NavLink}
                    to="/browser"
                    onClick={handleCloseMenu}
                  >
                    Welcome
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/people" onClick={handleCloseMenu}>
                    People
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/ai-recommendation"
                    onClick={handleCloseMenu}
                  >
                    AI Recommendation
                  </Nav.Link>

                  <Dropdown
                    title={"Genres"}
                    links={genreLinks.map((genre) => ({
                      ...genre,
                      onClick: handleClick,
                    }))}
                  />

                  <Dropdown
                    title={
                      <img
                        src="user.webp"
                        alt="User Icon"
                        className="img-fluid"
                        style={{ width: "30px", height: "30px" }}
                      />
                    }
                    links={links.map((link) => ({
                      ...link,
                      onClick: handleCloseMenu,
                    }))}
                  />  
                   <Nav.Link
                    as={NavLink}
                    to="/download"
                    onClick={handleCloseMenu}
                  >
                    Download
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            )}
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
