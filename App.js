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
import HeaderComponent from './HeaderComponent';
import './style.css';

const heading = (
  <>
    <HeaderComponent />
    <h1>Namaste React</h1>
  </>
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
root.render(heading);
