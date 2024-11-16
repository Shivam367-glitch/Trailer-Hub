import { Button, Col, Container, Row } from "react-bootstrap"
import { signOut } from "firebase/auth"; 
import { Link, matchPath, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";


import { hideGpt, toggleGpt } from "../utils/gptSlice";
const Header = () => {  
  const user=useSelector((state)=>state.user);
  const dispatch=useDispatch();
  const showGptSearch=useSelector((store)=>store?.gpt?.showGptSearch);
  const location=useLocation(); 
  const isMoviePage = matchPath({ path: "/movie/:id" }, location.pathname);
  const handleLogOut=()=>{
   if(auth.currentUser){
    signOut(auth).then(() => {
     if(showGptSearch) dispatch(hideGpt())
      // navigate('/logout');
    }).catch((error) => {
      alert('Error while Sign Out!')
    });
   }else{
    // navigate('/')
   }
  }
  return (
    <Container fluid={true} className="header_container z-2">
      <Row className="d-flex flex-row justify-content-between align-items-center">
        <Col xs={2}>   
         <img  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className="img-fluid" /> 
        </Col> 
        <Col xs={10} className="d-flex flex-row   align-items-center gap-3">  
          {(showGptSearch || isMoviePage) && <Link to="/browser"  onClick={()=>{dispatch(hideGpt())}} className="text-danger home_link">Home</Link>}
          {user && <img style={{width:"30px"}} src={user.photoURL} alt="User Profile" className="img-fluid" />}
          {user && <Button as={Link} to={"/browser"} onClick={()=>{dispatch(toggleGpt(true))}} className="bg-info fw-medium border-0">AI Search</Button> }
          <Button as={Link} onClick={handleLogOut}  variant="danger">{user?"Sign Out":"Sign In"}</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Header