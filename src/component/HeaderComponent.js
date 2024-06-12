import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../style/images/logo.png";
import Cart from "../style/images/cart.png";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const cartItems = useSelector((state) => state.cart.item);
  const [buttonText, setButtonText] = useState("Login");
  const navigate = useNavigate();

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
        <li onClick={() => navigate("/cart")}>
          <span className="flex flex-wrap">
            <img className="cart-logo" src={Cart} alt="cart" /> (
            {cartItems.length})
          </span>
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
