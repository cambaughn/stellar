import React, { Component } from 'react';

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
      <div style={stylePresets.horizontalCenter}>
        { this.findUsers() }
        { this.findQuestions() }
      </div>
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
