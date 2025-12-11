// Routes.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Wishlist from "../pages/Wishlist";
import Login from "../components/login-page/Loginform"
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Shop/:category", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/Login", element: <Login /> },
      { path: "/Wishlist", element: <Wishlist /> },
      { path: "/cart", element: <Cart /> },
      { path: "/Profile", element: <Profile /> },
    ],
  },
 { path: "*", element: <ErrorPage/> },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
