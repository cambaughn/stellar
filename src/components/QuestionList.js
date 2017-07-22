/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnsweredQuestion from './AnsweredQuestion';

const QuestionList = ({ questions }) => {
  return (
    <div style={styles.column}>
      { questions.map(question => {
        return <AnsweredQuestion question={question} key={question.id}/>
      })}
    </div>
  )
}


const styles = {
  column: {
    marginLeft: 50,
    marginRight: 50,
  },


}

export default QuestionList;
