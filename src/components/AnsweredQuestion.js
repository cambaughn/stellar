/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { baseUrl } from '../util/getPostMethods';

const AnsweredQuestion = ({ question }) => {
  return (
    <div key={question.id}>
      <div>
        <video width="320" height="240" controls>
          <source src={`${baseUrl}/answer/answer-1500086355570.mp4`} type='video/mp4' />
          <span>Your browser does not support the video tag.</span>
        </video>
      </div>

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
