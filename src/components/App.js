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
import Search from './Search';
import UserProfile from './UserProfile';
import UserProfileContainer from './UserProfileContainer';

// Utility functions & styles
import { getAllUsers } from '../util/getUsers';
import { getAllQuestions } from '../util/getQuestions';
import stylePresets from '../util/stylePresets';
import { setUsers, setQuestions, updateCurrentUser } from '../redux/actionCreators';


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
    getAllUsers(users => {
      this.store.dispatch(setUsers(users));
    })

    getAllQuestions(questions => {
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
          />

          <Switch>
            <Route exact path='/' render={() => (
              <Main
                questions={this.store.getState().questions}
              />
            )} />

            <Route path='/signup' render={ () => ( <SignUp
              isSignedIn={!!this.store.getState().currentUser.id}
              updateCurrentUser={this.updateCurrentUser} /> )} />

            <Route path='/login' render={ () => ( <LogIn
              isSignedIn={!!this.store.getState().currentUser.id}
              updateCurrentUser={this.updateCurrentUser} /> )} />

            <Route path='/search' render={ () => (
              <Search users={this.store.getState().users}/>
            )} />

            <Route path='/user/:userId' render={({ match }) => (
              <UserProfileContainer match={match} store={this.store} />
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
