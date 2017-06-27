/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import UserList from './UserList';

const Search = ({ users }) => {
  return (
    <div style={styles.container}>
      <UserList users={users} />
    </div>
  )
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',

    paddingTop: 30,
  },
}

export default Search;
