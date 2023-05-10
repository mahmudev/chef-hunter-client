import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componets/home/Home";
import Login from "../componets/auth/Login";
import Register from "../componets/auth/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../componets/pages/ErrorPage";
import Blogs from "../componets/pages/Blogs";
import AboutUs from "../componets/pages/AboutUs";
import Chefs from "../componets/pages/Chefs";
import Profile from "../componets/pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://chef-hunter-server-theta.vercel.app/chefs"),
      },
      {
        path: "/chefs/:id",
        element: ( <PrivateRoute><Chefs></Chefs> </PrivateRoute> ),
       loader: ({params})=> fetch(`https://chef-hunter-server-theta.vercel.app/chefs/${params.id}`)
     
      },
      {
        path: "/profile",
        element: ( <PrivateRoute><Profile></Profile> </PrivateRoute> )
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default router;
