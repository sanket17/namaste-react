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

import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './component/HeaderComponent';
import RestaurantCardComponent from './component/RestaurantCardComponent';
import { restuarantList } from './data';
import './style.css';

const heading = (
  <>
    <HeaderComponent />
    <div className="res-container">
      {restuarantList?.map((item) => {
        return (
          <RestaurantCardComponent key={item.info.resId} data={item.info} />
        );
      })}
    </div>
  </>
);
console.log(HeaderComponent());
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
root.render(heading);
