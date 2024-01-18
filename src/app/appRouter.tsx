import React from "react";
//route
import { Outlet, createBrowserRouter } from "react-router-dom";
//pages
import HomePage from "@app/pages/HomePage";
import NotFoundPage from "@app/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "test",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
