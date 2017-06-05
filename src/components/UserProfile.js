/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import QuestionForm from './QuestionForm';

import getUsers from '../util/getUsers';
import getQuestions from '../util/getQuestions';
import stylePresets from '../util/stylePresets';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      questions: []
    }
  }

  componentDidMount() {
    getUsers.findUser(this.props.match.params.userId, this.setUser.bind(this))
  }

  setUser(user) {
    this.setState({ user }, () => {
      this.findQuestions();
    });
  }

  findQuestions() {
    getQuestions.forUser(this.state.user.id, this.setQuestions.bind(this));
  }

  setQuestions(questions) {
    this.setState({ questions });
  }

  render() {
    let { name, bio } = this.state.user;

    return (
      <div style={styles.container}>
        <div style={styles.column}>

          <div style={styles.topInfo}>
            <h2>{name}</h2>
            <p>{bio}</p>
            <QuestionForm findQuestions={this.findQuestions.bind(this)}
              askerId={this.props.currentUserId} answererId={ this.state.user.id } />
          </div>

          <div>
            { this.state.questions.map(question => {
              return (
                <div key={question.id}>
                  <p style={styles.asking}>{question.asker.name} asks:</p>
                  <p>{question.text}</p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  topInfo: {
    marginBottom: 30,
  },

  column: {
    width: 400,
  },

  asking: {
    fontSize: '80%',
    color: 'grey'
  }
}


export default UserProfile;
