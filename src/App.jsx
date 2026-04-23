import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Body from "./components/layout/Body";
import MainLoader from "./components/loading/MainLoader";
const  MovieSearch= lazy(() => import("./pages/MovieSearch"));
const Login = lazy(() => import("./pages/Login"));
const PeopleSearch = lazy(() => import("./pages/PeopleSearch"));
const PasswordReset = lazy(() => import("./pages/PasswordReset"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const PeopleDetail = lazy(() => import("./pages/PeopleDetail"));
const LogOut = lazy(() => import("./pages/LogOut"));
const Browser = lazy(() => import("./pages/Browser"));
const CategoryMovie = lazy(() => import("./pages/CategoryMovie"));
const DiscoverPage = lazy(() => import("./pages/DiscoverPage"));
const Profile = lazy(() => import("./pages/Profile"));
const GptSearch = lazy(() => import("./pages/GptSearch"));
const Download = lazy(() => import("./pages/Download"));

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
