import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Auth/Login";
import LoginSuccess from "../pages/Auth/LoginSuccess";
import Register from "../pages/Auth/Register";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";
import Wallet from "../pages/wallet";
import PrivateRoute from "./PrivateRoute";
const Route = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/overview" replace />,
      },
      {
        path: "/overview",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/auth/login-success",
    element: <LoginSuccess />,
  },
]);

export default Route;
