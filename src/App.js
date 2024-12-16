import React from "react";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProfilePicPage from "./components/ProfilePicPage";
import Header from "./components/Header";

const Browse = lazy(() => import("./components/Browse"));

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <Header />
            <Login />
          </>
        ),
      },
      {
        path: "/browse",
        element: (
          <>
            <Header />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Browse />
            </Suspense>
          </>
        ),
      },
      {
        path: "/profile",
        element: <ProfilePicPage />,
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
