/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import NavBar from './NavBar';

// Utility functions & styles
import getUsers from '../util/getUsers';
import getQuestions from '../util/getQuestions';
import stylePresets from '../util/stylePresets';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      questions: []
    }
  }

  componentDidMount() {
    getUsers.all(users => {
      this.setState({ users });
    })

    getQuestions.all(questions => {
      this.setState({ questions });
    })
  }

  findUsers() {
    if (!this.state.users.length) {
      return <div></div>
    } else {
      return (
        <div style={styles.column}>
          <h2>Users</h2>
          { this.state.users.map(user => {
            return <p key={user.id}> {user.name} </p>
          })}
        </div>
      )
    }
  }

  findQuestions() {
    if (!this.state.questions.length) {
      return <div></div>
    } else {
      return (
        <div style={styles.column}>
          <h2>Questions</h2>
          { this.state.questions.map(question => {
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
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div style={stylePresets.horizontalCenter}>
            { this.findUsers() }
            { this.findQuestions() }
          </div>
        </div>
      </Router>
    );
  }
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

export default App;
