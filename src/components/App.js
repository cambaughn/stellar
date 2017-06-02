/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import NavBar from './NavBar';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Main from './Main';
import UserProfile from './UserProfile';

// Utility functions & styles
import getUsers from '../util/getUsers';
import getQuestions from '../util/getQuestions';
import stylePresets from '../util/stylePresets';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      questions: [],
      currentUser: {},
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

  updateCurrentUser(user) {
    this.setState({ currentUser: user })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' render={() => (
            <Main users={this.state.users} questions={this.state.questions} currentUser={this.state.currentUser} /> )} />
          <Route path='/signup' render={ () => ( <SignUp updateCurrentUser={this.updateCurrentUser.bind(this)} /> )} />
          <Route path='/login' component={LogIn} />

          {/* NOTE: Find out how to get path from URL that we're on */}
          <Route path='/user/:userId' render={ () => ( <UserProfile userId={1} />)} />
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
