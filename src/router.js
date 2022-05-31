import Suspense from "components/Suspense";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = Suspense(lazy(() => import("./pages/Login")));
const HomePage = Suspense(lazy(() => import("./pages/HomePage")));
const NotFoundPage = Suspense(lazy(() => import("./pages/NotFoundPage")));

export const routers = [
  {
    path: "/",
    element: <HomePage />,
    // children: [
    //   { path: "/f", element: <Navigate to="" replace={true} /> },
    // ]
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
