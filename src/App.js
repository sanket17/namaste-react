import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import "./style/style.css";
import BodyComponent from "./component/BodyComponent";
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import RestaurantDetail from "./component/Restaurant/RestaurantDetail";
import Login from "./component/Auth/Login";
import CityContext from "./Utils/CityContext";
import UserContext from "./Utils/UserContext";

const AboutUs = lazy(() => import("./component/AboutUs"));

const App = () => {
  const [defaultCityName, setDefaultCityName] = useState("Mumbai");
  return (
    <>
      <CityContext.Provider
        value={{
          cityName: defaultCityName,
          setDefaultCityName,
        }}>
        <UserContext.Provider
          value={{
            loggedInUserName: "Sanket Tikam",
          }}>
          <HeaderComponent />
          <Outlet />
        </UserContext.Provider>
      </CityContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
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
