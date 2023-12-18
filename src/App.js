import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { CreateContainer, MainContainer } from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <MainContainer />,
      },
      {
        path: "createItem",
        element: <CreateContainer />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
