/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
      currentUser: { name: 'Luke Skywalker', email: 'luke@gmail.com', bio: 'I am a Jedi, like my father before me', id: 1 },
    }

    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    this.getUsersAndQuestions();
  }

  getUsersAndQuestions() {
    getUsers.all(users => {
      this.setState({ users });
    })

    getQuestions.all(questions => {
      this.setState({ questions });
    })
  }

  updateCurrentUser(user) {
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar isSignedIn={!!this.state.currentUser.id}
            updateCurrentUser={this.updateCurrentUser}
            currentUser={this.state.currentUser} />

          <Route exact path='/' render={() => (
            <Main users={this.state.users} questions={this.state.questions} currentUser={this.state.currentUser} /> )} />
          <Route path='/signup' render={ () => ( <SignUp
            isSignedIn={!!this.state.currentUser.id}
            updateCurrentUser={this.updateCurrentUser} /> )} />
          <Route path='/login' render={ () => ( <LogIn
            isSignedIn={!!this.state.currentUser.id}
            updateCurrentUser={this.updateCurrentUser} /> )} />
          <Route path='/user/:userId' render={({ match }) => {
            console.log(' changing! ');
            return (<UserProfile match={match} currentUserId={this.state.currentUser.id}/>)}} />
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
