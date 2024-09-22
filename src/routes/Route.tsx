import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Auth/Login";
import LoginSuccess from "../pages/Auth/LoginSuccess";
import Error from "../pages/Error";
import Home from "../pages/Home";
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
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/login-success",
    element: <LoginSuccess />,
  },
]);

export default Route;
