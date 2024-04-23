import React from 'react';
import Logo from '../images/logo.png';
import Cart from '../images/cart.png';
import UserProfile from '../images/user-profile.png';

const HeaderComponent = () => {
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
      </ul>
    </div>
  );
};

export default HeaderComponent;
