import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { lazy } from "react";
import Login from "./components/Login"; 
import People from "./components/People"; 
import PasswordReset from "./components/PasswordReset"; 
import MovieDetail from "./components/MovieDetail"; 
import LogOut from "./components/LogOut";
import Body from "./components/Body";  
import Browser from "./components/Browser"; 

// const LogOut=lazy(()=>import('./components/LogOut'));
// const MovieDetail=lazy(()=>import('./components/MovieDetail')); 
// const PasswordReset=lazy(()=>import('./components/PasswordReset'));
// const People=lazy(()=>import('./components/People')); 
// const Login=lazy(()=>import('./components/Login')); 

function App() {

  const appRoute = createBrowserRouter([
   {
    path:'/',
    element:<Body/>,
    children:[
      {
        path: '',
        element: Login? <Login/>:<h1>Loading....</h1>
      },
      {
        path: '/browser',
        element: <Browser />
      }, 
      {
          path:'/movie/:movieId',
          element:MovieDetail?<MovieDetail/>:<h1>Loading....</h1>
      },
      {
        path:'/logout',
        element:LogOut?<LogOut/>:<h1>Loading....</h1>
      },
      {
        path: "/password-reset",
        element: PasswordReset?<PasswordReset/>:<h1>Loading....</h1>,
      },
      {
        path:"/people",
        element:People?<People/>:<h1>Loading....</h1>
      }
    ]
   }
  ]);
  
  return (
    <> 
    <RouterProvider router={appRoute} />
    </>
  )
}

export default App
