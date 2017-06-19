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
import { setUsers, setQuestions, updateCurrentUser } from '../redux/actionCreators';

// { name: 'Luke Skywalker', email: 'luke@gmail.com', bio: 'I am a Jedi, like my father before me', id: 1 }

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
    this.store = this.props.store;
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    this.getUsersAndQuestions();
  }

  getUsersAndQuestions() {
    getUsers.all(users => {
      this.store.dispatch(setUsers(users));
    })

    getQuestions.all(questions => {
      this.store.dispatch(setQuestions(questions));
    })
  }

  updateCurrentUser(user) {
    this.store.dispatch(updateCurrentUser(user));
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar isSignedIn={!!this.store.getState().currentUser.id}
            updateCurrentUser={this.updateCurrentUser}
            currentUser={this.store.getState().currentUser}
            store={this.store}
          />

          <Route exact path='/' render={() => (
            <Main users={this.store.getState().users} questions={this.store.getState().questions} currentUser={this.store.getState().currentUser} /> )} />
          <Route path='/signup' render={ () => ( <SignUp
            isSignedIn={!!this.store.getState().currentUser.id}
            updateCurrentUser={this.updateCurrentUser} /> )} />
          <Route path='/login' render={ () => ( <LogIn
            isSignedIn={!!this.store.getState().currentUser.id}
            updateCurrentUser={this.updateCurrentUser} /> )} />
          <Route path='/user/:userId' render={({ match }) => {
            return (<UserProfile match={match} currentUserId={this.store.getState().currentUser.id} />)}} />
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
