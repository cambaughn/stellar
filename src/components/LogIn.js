/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import stylePresets from '../util/stylePresets';
import signInHelpers from '../util/signInHelpers';


class LogIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    signInHelpers.logIn({ email: this.state.email, password: this.state.password }, this.handleLoggedIn.bind(this));
  }

  handleLoggedIn(user) {
    if (user.id) {
      this.resetForm();
      this.props.updateCurrentUser(user);
    }
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  resetForm() {
    this.setState({ email: ''});
    this.setState({ password: '' });
  }

  render() {
    if (this.props.isSignedIn) {
      return ( <Redirect to='/' /> )
    } else {
      return (
        <div style={stylePresets.horizontalCenter}>
          <form style={stylePresets.form} onSubmit={this.handleSubmit} >
            <h1>Log In</h1>
            <input type="email" placeholder="Email Address" style={stylePresets.textInput}
              onChange={e => this.handleChange('email', e) } required />
            <input type="password" placeholder="Password" style={stylePresets.textInput}
              onChange={e => this.handleChange('password', e) } required />
            <button type="submit" style={stylePresets.buttonPrimary}>
              Log In
            </button>
          </form>
        </div>
      )
    }
  }
}


export default LogIn;
