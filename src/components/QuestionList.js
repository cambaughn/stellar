/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const QuestionList = ({ questions }) => {
  return (
    <div style={styles.column}>
      { questions.map(question => {
        return (
          <div key={question.id}>
            <p style={styles.asking}>
              <Link to={`/user/${question.asker.id}`} style={styles.link}>
                <span>{question.asker.name} </span>
              </Link>
              <span>asks </span>
              <Link to={`/user/${question.answerer.id}`} style={styles.link}>
                <span>{question.answerer.name} </span>
              </Link>
              :
            </p>
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
    color: 'grey',
  },

  link: {
    textDecoration: 'none',
    color: 'grey',
  }
}

export default QuestionList;
