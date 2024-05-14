import React, { useState } from "react";
import Logo from "../style/images/logo.png";
import Cart from "../style/images/cart.png";

const HeaderComponent = () => {
  const [buttonText, setButtonText] = useState("Login");
  return (
    <div id="header">
      <img className="logo" src={Logo} alt="Logo image" />

      <ul id="list">
        <li>Search</li>
        <li>Offer</li>
        <li>Help</li>
        <li>Sign-in</li>
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
