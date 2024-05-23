import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../style/images/logo.png";
import Cart from "../style/images/cart.png";

const HeaderComponent = () => {
  const [buttonText, setButtonText] = useState("Login");
  return (
    <div id="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo image" />
      </Link>

      <ul id="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <img className="cart-logo" src={Cart} alt="cart" />
        </li>
        <li>
          <button
            onClick={() => {
              if (buttonText === "Login") setButtonText("Logout");
              else setButtonText("Login");
            }}>
            {buttonText}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
