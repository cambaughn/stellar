/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import stylePresets from '../util/stylePresets';
import postQuestion from '../util/postQuestion';


class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      answerer: null,
    }
  }

  submitQuestion(e) {
    let question = {
      text: this.state.text,
      askerId: this.props.askerId,
      answererId: this.props.answererId
    }
    e.preventDefault();
    postQuestion.new(question, this.questionSubmitted.bind(this));
  }

  questionSubmitted() {
    this.setState({ text: '' });
    this.props.findQuestions();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitQuestion.bind(this)}>
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
  questionInput: {
    width: '82%',
  }
}

export default QuestionForm;
