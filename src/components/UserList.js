/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const UserList = ({ users }) => {
  return (
    <div style={styles.column}>
      <h2>Users</h2>
      { users.map(user => {
        return <p key={user.id}> {user.name} </p>
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
  }
}

export default UserList;
