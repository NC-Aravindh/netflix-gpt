import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lazy, Suspense } from "react";

const Browse = lazy(() => import("./Browse"));

const Body = () => {
  const dispatch = useDispatch();
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
  ]);

  //User signup, signin ,signout .. Auth state changes

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
