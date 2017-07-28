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
        <video style={styles.video} controls>
          <source src={`${baseUrl}/answer/answer-1500086355570.mp4`} type='video/mp4' />
          <span>Your browser does not support the video tag.</span>
        </video>
      </div>

      <div style={styles.textWrapper}>
        <Link to={`/user/${question.answerer.id}`} style={styles.link}>
          <span style={styles.name}>{question.answerer.name}</span>
        </Link>
        <p>{question.text}</p>
      </div>

    </div>
  )
}


const styles = {
  container: {
    width: 400,
    marginBottom: 50,
    paddingBottom: 0,

    // backgroundColor: '#FAFAFA', // or #F4F4F4

    border: `1px solid ${colors.lightGrey}`,
    borderRadius: 5,
  },

  // VIDEO --------------------------

  videoWrapper: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 15,
  },

  video: {
    width: 'auto',
    height: 400,
  },

  // TEXT ---------------------------

  textWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
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
