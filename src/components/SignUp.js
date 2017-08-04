/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import stylePresets from '../util/design/stylePresets';
import { signup } from '../util/signInHelpers';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      // confirmPass: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.state.name && this.state.email && this.state.password) {
      signup(this.state, this.handleLoggedIn.bind(this));
    }
  }

  handleLoggedIn(user) {
    this.setState({ name: '', email: '', password: ''});
    this.props.updateCurrentUser(user);
  }

  handleRedirect() {
    if (this.props.isSignedIn) {
      return (
        <Redirect to='/' />
      )
    }
  }

  render() {

    return (
      <div style={stylePresets.horizontalCenter}>
        { this.handleRedirect() }
        <form style={stylePresets.form} onSubmit={this.handleSubmit.bind(this)}>
          <h1>Sign Up</h1>
          <input type="text" placeholder="Full Name"
            value={this.state.name} style={stylePresets.textInput}
            onChange={e => { this.setState({ 'name': e.target.value }) }} required />

          <input type="email" placeholder="Email Address"
            value={this.state.email} style={stylePresets.textInput}
            onChange={e => { this.setState({ 'email': e.target.value }) }} required />

          <input type="password" placeholder="Password"
            value={this.state.password} style={stylePresets.textInput}
            onChange={e => { this.setState({ 'password': e.target.value }) }} required />

          {/* <input type="password" placeholder="Confirm Password" style={stylePresets.textInput} /> */}
          <button type="submit" style={stylePresets.buttonPrimary}>
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}



export default SignUp;
