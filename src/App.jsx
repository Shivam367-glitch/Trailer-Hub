import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import ProtectedRoute from "./components/ProtectedRoute";
import Body from "./components/Body";
import MainLoader from "./components/MainLoader";
import MovieSearch from "./components/MovieSearch";

const Login = lazy(() => import("./components/Login"));
const PeopleSearch = lazy(() => import("./components/PeopleSearch"));
const PasswordReset = lazy(() => import("./components/PasswordReset"));
const MovieDetail = lazy(() => import("./components/MovieDetail"));
const PeopleDetail = lazy(() => import("./components/PeopleDetail"));
const LogOut = lazy(() => import("./components/LogOut"));
const Browser = lazy(() => import("./components/Browser"));
const CategoryMovie = lazy(() => import("./components/CategoryMovie"));
const DiscoverPage = lazy(() => import("./components/DiscoverPage"));
const Profile = lazy(() => import("./components/Profile"));
const GptSearch = lazy(() => import("./components/GptSearch"));
const Download = lazy(() => import("./components/Download"));

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<MainLoader />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/password-reset",
          element: (
            <Suspense fallback={<MainLoader />}>
              <PasswordReset />
            </Suspense>
          ),
        }, 
        {
          path: "/download",
          element: (
            <Suspense fallback={<MainLoader />}>
              <Download />
            </Suspense>
          ),
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/browser",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <Browser />
                </Suspense>
              ),
            },
            {
              path: "/discover/:endpoint",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <DiscoverPage />
                </Suspense>
              ),
            },
            {
              path: "/movie/:movieId",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <MovieDetail />
                </Suspense>
              ),
            },
            {
              path:"/search-movie",
              element:(
                <Suspense fallback={<MainLoader />}>
                  <MovieSearch />
                </Suspense>
              )
            },
            {
              path: "/logout",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <LogOut />
                </Suspense>
              ),
            },
            {
              path: "/people",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <PeopleSearch />
                </Suspense>
              ),
            },
            {
              path: "/people/:peopleId",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <PeopleDetail />
                </Suspense>
              ),
            },
            {
              path: "/movies/:type",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <CategoryMovie />
                </Suspense>
              ),
            },
            {
              path: "/profile",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <Profile />
                </Suspense>
              ),
            },
            {
              path: "/ai-recommendation",
              element: (
                <Suspense fallback={<MainLoader />}>
                  <GptSearch />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={appRoute} />;
}

export default App;
