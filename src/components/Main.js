/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import UserList from './UserList';
import QuestionList from './QuestionList';
import stylePresets from '../util/stylePresets';


const Main = ({ users, questions, currentUser}) => {


  return (
    <div style={stylePresets.horizontalCenter}>
      <UserList users={users} />
      <QuestionList questions={questions} />
    </div>
  )
}

export default Main;
