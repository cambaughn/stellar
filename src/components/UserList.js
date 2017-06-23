/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import colors from '../util/colors';


const UserList = ({ users }) => {

  return (
    <div style={styles.column}>
      <h2>Users</h2>
      { users.map(user => {
        return (
          <Link to={`/user/${user.id}`} style={styles.link} key={user.id}>
            <p> {user.name} </p>
          </Link>
        )
      })}
    </div>
  )
}

const styles = {
  column: {
    marginLeft: 50,
    marginRight: 50,
  },
  asking: {
    fontSize: '80%',
    color: 'grey'
  },
  link: {
    textDecoration: 'none',
    color: colors.black,
  }
}

export default UserList;
