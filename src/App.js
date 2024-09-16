import * as React from "react";

import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    { path: "/register", element: <RegistrationPage /> },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
