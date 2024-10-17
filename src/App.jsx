import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browser from "./components/Browser";
import LogOut from "./components/LogOut";
import Body from "./components/Body" 
import MovieDetail from "./components/MovieDetail"
function App() {

  const appRoute = createBrowserRouter([
   {
    path:'/',
    element:<Body/>,
    children:[
      {
        path: '',
        element: <Login />
      },
      {
        path: '/browser',
        element: <Browser />
      }, 
      {
          path:'/movie/:movieId',
          element:<MovieDetail/>
      },
      {
        path:'/logout',
        element:<LogOut/>
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
