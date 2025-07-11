import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser} from '../utils/userSlice';
import { useEffect } from 'react';
import { auth } from "../utils/firebase";
import Header from "./Header.jsx";


const Body = () => {
  
  const dispatch = useDispatch(); 
  const navigate=useNavigate(); 
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // When user Sign In and Sign Up
        const { uid, displayName, email,photoURL } = user;
        dispatch(addUser({ uid, displayName, email,photoURL })); 
       if (window.location.pathname === "/" || window.location.pathname === "/login") {
        navigate("/browser");
      }
      }else {
        dispatch(removeUser());
      }
    }); 
    return ()=>{
      unsubscribe();
    }
  }, [dispatch, navigate]); 

  return (
    <div className="app-layout">
    <Header className="header" />
    {/* <ScrollToTop /> */}
    <main className="main-content d-flex flex-row justify-content-center justify-content-md-start">
      <Outlet />
    </main>
    {/* <Footer className="footer" /> */}
  </div>
  );
};

export default Body;
