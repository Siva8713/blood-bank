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
import EmergencyNeed from "./Components/EmergencyNeed";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [setUser]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/home" /> : <LoginPage />,
      // element: <LoginPage />,
    },
    { path: "/register", element: <RegistrationPage /> },
    {
      path: "/home",
      element: user ? <HomePage setUser={setUser} /> : <Navigate to="/" />,
      children: [
        {
          path: "donate",
          element: <DonateBlood />,
        },
        {
          path: "request",
          element: <RequestBlood />,
        },
        {
          path: "donors",
          element: <Donors />,
        },
        {
          path: "emergency",
          element: <EmergencyNeed />,
        },
      ],
      // element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
