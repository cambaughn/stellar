/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

import getUsers from '../util/getUsers';
import getQuestions from '../util/getQuestions';
import stylePresets from '../util/design/stylePresets';

const UserProfile = ({ user, questions, currentUser, getData }) => {
  return (
    <div style={styles.container}>
      <div style={styles.column}>

        <div style={styles.topInfo}>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <QuestionForm
            findQuestions={getData}
            askerId={currentUser.id}
            answererId={user.id}
          />
        </div>

        <div>
          <QuestionList questions={questions} />
        </div>

      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  topInfo: {
    marginBottom: 30,
  },

  column: {
    width: 400,
  },

  asking: {
    fontSize: '80%',
    color: 'grey'
  },

  link: {
    textDecoration: 'none',
    color: 'grey',
  }
}


export default UserProfile;
