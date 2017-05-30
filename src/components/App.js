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
            return <p key={question.id}>{question.text}</p>
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
  }
}

export default App;
