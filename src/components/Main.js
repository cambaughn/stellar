/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import QuestionList from './QuestionList';
import stylePresets from '../util/design/stylePresets';


const Main = ({ questions }) => {


  return (
    <div style={styles.container}>
      <QuestionList questions={questions} />
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

export default Main;
