/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import stylePresets from '../util/stylePresets';


const LogIn = () => {
  return (
    <div style={stylePresets.horizontalCenter}>
      <form style={stylePresets.form}>
        <input type="email" placeholder="Email Address" style={stylePresets.textInput} />
        <input type="password" placeholder="Password" style={stylePresets.textInput} />
      </form>
    </div>
  )
}


export default LogIn;
