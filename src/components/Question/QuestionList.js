/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnsweredQuestion from './AnsweredQuestion';

const QuestionList = ({ questions }) => {
  return (
    <div style={styles.container}>
      { questions.map(question => {
        return <AnsweredQuestion question={question} key={question.id}/>
      })}
    </div>
  )
}


const styles = {
  container: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // flexWrap: 'wrap',
  },


}

export default QuestionList;
