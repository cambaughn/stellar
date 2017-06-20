/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import QuestionForm from './QuestionForm';

import getUsers from '../util/getUsers';
import getQuestions from '../util/getQuestions';
import stylePresets from '../util/stylePresets';

const UserProfile = ({ user, questions, currentUser }) => {
  return (
    <div style={styles.container}>
      <div style={styles.column}>

        <div style={styles.topInfo}>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <QuestionForm findQuestions={console.log}
            askerId={currentUser.id} answererId={ user.id } />
        </div>

        <div>
          { questions.map(question => {
            return (
              <div key={question.id}>
                <p style={styles.asking}>{question.asker.name} asks:</p>
                <p>{question.text}</p>
              </div>
            )
          })}
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
  }
}


export default UserProfile;
