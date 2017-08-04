/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import stylePresets from '../../util/design/stylePresets';
import { postQuestion } from '../../util/postQuestion';


class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }

    this.submitQuestion = this.submitQuestion.bind(this)
    this.handleQuestionSubmitted = this.handleQuestionSubmitted.bind(this)
  }

  submitQuestion(e) {
    let question = {
      text: this.state.text,
      askerId: this.props.askerId,
      answererId: this.props.answererId
    }
    e.preventDefault();
    postQuestion(question, this.handleQuestionSubmitted);
  }

  handleQuestionSubmitted() {
    this.setState({ text: '' });
    this.props.findQuestions(this.props.answererId);
  }

  render() {
    return (
      <div style={styles.container}>
        <form onSubmit={this.submitQuestion}>
          <input type='text' value={this.state.text}
            style={{...stylePresets.textInput, ...styles.questionInput}}
            onChange={e => { this.setState({ text: e.target.value })}}></input>
          <button style={stylePresets.buttonPrimary}>Ask Question</button>
        </form>
      </div>
    )
  }
}


const styles = {
  // CONTAINER ---------------------
  container: {
    width: 400,
  },

  questionInput: {
    width: '82%',
  }
}

export default QuestionForm;
