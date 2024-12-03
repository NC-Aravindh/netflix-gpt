import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProfilePicPage from "./ProfilePicPage";

const Browse = lazy(() => import("./Browse"));

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Browse />
        </Suspense>
      ),
    },
    {
      path:'/profile',
      element: <ProfilePicPage/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
