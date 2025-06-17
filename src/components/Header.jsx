import { useCallback, useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { setCategoryPage } from '../utils/categorySlice';


function OffcanvasExample() {
  const [expanded, setExpanded] = useState(false);
  const dispatch=useDispatch(); 
  const user=useSelector((store)=>store.user);
  const handleCloseMenu = () => setExpanded(false);
 
  const handleClick = () => {

    dispatch(setCategoryPage(1));
  } 
  const links=[{ url:"/profile",name:"Profile"},{url:"/logout",name:"Log Out"}]
  const Genres=useSelector((store) => store?.movie?.genres);
  const genreLinks = useMemo(() => 
    (Genres ?? []).map((genre) => ({
      url: `/movies/${genre.id}`,
      name: genre.name,
    })), 
  [Genres]);



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
                 <Nav.Link  as={NavLink} to={'/ai-recommendation'}>AI Recommendation</Nav.Link>
                 <Dropdown title={"Genres"} links={genreLinks} onClick={handleClick}/>
                 <Dropdown title={<img src="user.webp" alt="User Icon" className='img-fluid ' style={{ width: '30px', height: '30px' }} />} links={links}/>

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