import React from "react";

//router
import { RouterProvider } from "react-router-dom";
import router from "./appRouter";

export const App = () => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_API_KEY);

  return <RouterProvider router={router} />;
};
