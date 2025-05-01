import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import NewsDetails from "../layouts/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: SignUp,
      }
    ]
  },
  {
    path: "/newsDetails/:id",
    element: <NewsDetails></NewsDetails>,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
