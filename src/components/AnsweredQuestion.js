/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const AnsweredQuestion = ({ question }) => {
  return (
    <div key={question.id}>
      <Link to={`/user/${question.answerer.id}`} style={styles.link}>
        <span style={styles.name}>{question.answerer.name}</span>
      </Link>
      <p>{question.text}</p>
    </div>
  )
}


const styles = {
  container: {

  },

  asking: {
    fontSize: '80%',
    color: 'grey',
  },

  link: {
    textDecoration: 'none',
  },

  name: {
    color: 'black',
    fontWeight: '600',

  }
}

export default AnsweredQuestion;
