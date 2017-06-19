/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import colors from '../util/colors.js';


import { updateCurrentUser } from '../redux/actionCreators';


const NavBar = ({ isSignedIn, updateCurrentUser, currentUser, store }) => {

  const renderLinks = () => {
    if (!isSignedIn) {
      return (
        <div style={styles.navLinks}>
          <Link to='/signup' style={styles.link}>
            <p>Sign Up</p>
          </Link>

          <Link to='/login' style={styles.link}>
            <p>Log In</p>
          </Link>
        </div>
      )
    } else {
      return (
        <div style={styles.navLinks}>
          <Link to={`/user/${currentUser.id}`} style={styles.link}>
            <p>Profile</p>
          </Link>

          <div style={styles.link} onClick={() => { updateCurrentUser({}) }}>
            <p>Log Out</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div style={styles.bar}>
      <div>
        <Link to='/' style={styles.brand}>
          <h2>stellar</h2>
        </Link>
      </div>

      { renderLinks() }
    </div>
  )
}


const styles = {
  bar: {
    width: 'inherit',
    height: 80,
    backgroundColor: 'white',

    paddingLeft: 100,
    paddingRight: 100,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    textDecoration: 'none',
    color: colors.main,
  },

  navLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  link: {
    color: colors.black,
    textDecoration: 'none',
    fontSize: '90%',
    marginLeft: 40,
    cursor: 'pointer',
  }
}


export default NavBar
