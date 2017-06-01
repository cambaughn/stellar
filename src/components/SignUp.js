/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import stylePresets from '../util/stylePresets';
import signInHelpers from '../util/signInHelpers';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    signInHelpers.signUp({ name: this.state.name, email: this.state.email, password: this.state.email }, console.log)
  }

  render() {
    return (
      <div>
        <form style={stylePresets.form} onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Full Name" style={stylePresets.textInput}
            onChange={e => { this.setState({ 'name': e.target.value }) }} />

          <input type="email" placeholder="Email Address" style={stylePresets.textInput}
            onChange={e => { this.setState({ 'email': e.target.value }) }} />

          <input type="password" placeholder="Password" style={stylePresets.textInput}
            onChange={e => { this.setState({ 'password': e.target.value }) }} />

          <input type="password" placeholder="Confirm Password" style={stylePresets.textInput} />
          <button type="submit" style={stylePresets.buttonPrimary}>
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}



export default SignUp;
