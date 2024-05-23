import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import "./style/style.css";
import BodyComponent from "./component/BodyComponent";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import RestaurantDetail from "./component/Restaurant/RestaurantDetail";
import Login from "./component/Auth/Login";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetail />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
