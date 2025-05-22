import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGpt } from "../utils/gptSlice";
function OffcanvasExample() {
  const [expanded, setExpanded] = useState(false);
  const dispatch=useDispatch(); 
  const showGpt=useSelector((store)=>store.gpt.showGptSearch);
  const user=useSelector((store)=>store.user);
  const handleCloseMenu = () => setExpanded(false);
  const expand=false;
  return (
    <>
      <Navbar expand={false} className="bg-transparent z-3 d-flex flex-row" >
        <Container fluid={true}>
        <Navbar.Brand  as={NavLink} to={user?"/browser":"/"} className="w-18"> 
          <img src="logo.png" alt="Trailer Hub Logo" className='img-fluid'/>
         </Navbar.Brand> 
         {
          user&& <Navbar.Toggle aria-controls="basic-navbar-nav"  />
         }
       
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src="logo.png" alt="Trailer Hub Logo" className='img-fluid w-18'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fs-5 fw-bolder">
                <Nav.Link as={NavLink} to={'/browser'} >Welcome</Nav.Link>
                <Nav.Link as={NavLink} to={'/people'}>People</Nav.Link>
                <Nav.Link >People</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample; 