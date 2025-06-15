import { useState } from "react";
import Container from "react-bootstrap/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGpt } from "../utils/gptSlice";
import Dropdown from "./Dropdown";
function OffcanvasExample() {
  const [expanded, setExpanded] = useState(false);
  const dispatch=useDispatch(); 
  const showGpt=useSelector((store)=>store.gpt.showGptSearch);
  const user=useSelector((store)=>store.user);
  const handleCloseMenu = () => setExpanded(false);

  const links=[{
                  url:"/profile",
                  title:"Profile"
                 },
                 {
                   url:"/logout",
                  title:"Log Out"
                 }]
  const expand=false;
  return (
    <>
      <Navbar expand={"md"} className="bg-secondary bg-opacity-50 z-3 d-flex flex-row">
        <Container fluid={true}>
        <Navbar.Brand  as={NavLink} to={user?"/browser":"/"} > 
          <img src="logo.png" alt="Trailer Hub Logo" className='img-fluid w-18'/>
         </Navbar.Brand> 
         {
          user&& <Navbar.Toggle aria-controls="basic-navbar-nav"  />
         }
       
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
             placement="end"
            
            >
              <Offcanvas.Header closeButton  >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src="logo.png" alt="Trailer Hub Logo" className='img-fluid w-18'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              {
                user &&
              <Offcanvas.Body className="d-flex flex-row justify-content-center" >
                <Nav className="justify-content-start  flex-grow-1 fw-bolder">
                <Nav.Link as={NavLink} to={'/browser'} >Welcome</Nav.Link>
                <Nav.Link as={NavLink} to={'/people'}>People</Nav.Link>
                 {/* <Nav.Link as={NavLink} to={'/watch-history'}>History</Nav.Link>  */}
                 <Nav.Link  onClick={()=>{
                  dispatch(toggleGpt(true));
                 }}>AI Recommendation</Nav.Link>
                  {/* <NavDropdown
                    title={<img src="person.png" alt="User Icon" className='img-fluid ' style={{ width: '30px', height: '30px' }} />}
                    id={`offcanvasNavbarDropdown-${expand}`}
                  >
                    <NavDropdown.Item>
                      <Nav.Link as={NavLink} to={'/profile'}>Profile</Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Nav.Link as={NavLink} to={'/logout'}>Log Out</Nav.Link></NavDropdown.Item>
                  </NavDropdown> */} 
                 <Dropdown title={<img src="person.png" alt="User Icon" className='img-fluid ' style={{ width: '30px', height: '30px' }} />} links={links}/>

                </Nav>
                 
              </Offcanvas.Body>
              }
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample; 