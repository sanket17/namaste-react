import React from 'react';
import Logo from './images/logo.png';
import Search from './images/icons-search.png';
import UserProfile from './images/user-profile.png';

const HeaderComponent = () => {
  return (
    <div>
      <img className='logo' src={Logo} alt='Logo image' />

      <input type='text' name='search' id='search' />
      <button>
        <img className='search-icon' src={Search} alt='search icon' />
      </button>

      <img className='profile' src={UserProfile} alt='User profile' />
      <div className='clear'></div>
    </div>
  );
};

export default HeaderComponent;
