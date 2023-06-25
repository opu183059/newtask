import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Authprovider from "./Provider/Authprovider.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Privateroute from "./Provider/Privateroute/Privateroute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Privateroute>
        <App></App>
      </Privateroute>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
