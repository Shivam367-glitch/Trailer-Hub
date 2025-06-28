// components/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user=useSelector((store)=>store.user);
    
  return user ? <Outlet /> : <Navigate to="" />;
};

export default ProtectedRoute;
// This component checks if the user is logged in. If they are, it renders the child components (Outlet). If not, it redirects them to the login page.
 