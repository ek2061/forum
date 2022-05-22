import Suspense from "components/Suspense";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = Suspense(lazy(() => import("./pages/Login")));
const NotFoundPage = Suspense(lazy(() => import("./pages/NotFoundPage")));

export const routers = [
  {
    path: "/",
    element: <Navigate to="/login" replace={true} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace={true} />,
  },
];
