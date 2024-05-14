// /**
//  * <div id='parent'>
//  *  <div id="child">
//  *         <h1></h1>
//  * <h2></h2>
//  * </div>
//  * </div>
//  *
//  *
//  *
//  */

import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/HeaderComponent";
import "./style/style.css";
import BodyComponent from "./component/BodyComponent";

const App = (
  <>
    <HeaderComponent />
    <BodyComponent />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
