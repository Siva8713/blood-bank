import * as React from "react";

import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useState, useEffect } from "react";
import { auth } from "./Components/firebase";
import DonateBlood from "./Components/DonateBlood";
import RequestBlood from "./Components/RequestBlood";
import Donors from "./Components/Donors";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/home" /> : <LoginPage />,
    },
    { path: "/register", element: <RegistrationPage /> },
    {
      path: "/home",
      element: user ? <HomePage /> : <Navigate to="/" />,
    },
    {
      path: "/donate",
      element: <DonateBlood />,
    },
    {
      path: "/request",
      element: <RequestBlood />,
    },
    {
      path: "/donors",
      element: <Donors />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
