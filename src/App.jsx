import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Login from "./components/Login"; 
import PeopleSearch from "./components/PeopleSearch"; 
import PasswordReset from "./components/PasswordReset"; 
import MovieDetail from "./components/MovieDetail"; 
import PeopleDetail from "./components/PeopleDetail";
import LogOut from "./components/LogOut";
import Body from "./components/Body";  
import Browser from "./components/Browser"; 
import WatchHistoryPage from "./components/WatchHistoryPage";
import CategoryMovie from "./components/CategoryMovie";

 
function App() {

  const appRoute = createBrowserRouter([
   {
    path:'/',
    element:<Body/>,
    children:[
      {
        path: '',
        element: <Login/>
      },
      {
        path:'/watch-history',
        element:<WatchHistoryPage/>
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
      },
      {
        path: "/password-reset",
        element:<PasswordReset/>,
      }, 
      {
        path:"/people",
        element:<PeopleSearch/>
      },
      
      {
        path:'/people/:peopleId',
        element:<PeopleDetail/>
    },{
      path:'/movies/:type',
      element:<CategoryMovie/>
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
