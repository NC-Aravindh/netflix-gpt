import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import {useDispatch} from 'react-redux'


const Body = () => {
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
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
