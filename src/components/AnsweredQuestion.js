/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { baseUrl } from '../util/getPostMethods';
import colors from '../util/colors';

const AnsweredQuestion = ({ question }) => {
  return (
    <div style={styles.container} key={question.id} >
      <div style={styles.videoWrapper}>
        <video style={styles.video} controls controlsList="nodownload">
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
    width: 400,
    marginBottom: 50,

    // backgroundColor: '#FAFAFA', // or #F4F4F4
  },

  videoWrapper: {
    marginBottom: 30,
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  video: {
    width: 'auto',
    height: 400,
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
