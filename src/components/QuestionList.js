/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const QuestionList = ({ questions }) => {
  return (
    <div style={styles.column}>
      <h2>Questions</h2>
      { questions.map(question => {
        return (
          <div key={question.id}>
            <p style={styles.asking}>{question.asker.name} asks {question.answerer.name}:</p>
            <p>{question.text}</p>
          </div>
        )
      })}
    </div>
  )
}


const styles = {
  column: {
    marginLeft: 50,
    marginRight: 50,
  },
  asking: {
    fontSize: '80%',
    color: 'grey'
  }
}

export default QuestionList;
