/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';
import colors from '../util/colors.js';

import { updateCurrentUser } from '../redux/actionCreators';


const NavBar = ({ isSignedIn, updateCurrentUser, currentUser }) => {

  return (
    <div style={styles.bar}>
      <div>
        <Link to='/' style={styles.brand}>
          <h2>stellar</h2>
        </Link>
      </div>

      { isSignedIn ? (
        <div style={styles.navLinks}>

          <NavLink path={'/search'} text={'Search'} />
          <NavLink path={`/user/${currentUser.id}`} text={'Profile'} />

          <div style={styles.link} onClick={() => { updateCurrentUser({}) }}>
            <p>Log Out</p>
          </div>
        </div>

      ) : (

        <div style={styles.navLinks}>
          <NavLink path={'/signup'} text={'Sign Up'} />
          <NavLink path={'/login'} text={'Log In'} />
        </div>
      )}
    </div>
  )
}


const styles = {
  bar: {
    width: 'inherit',
    height: 70,
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
    fontFamily: 'Roboto',
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
    marginLeft: 20,
    marginRight: 20,
    cursor: 'pointer',
  }
}


export default NavBar
