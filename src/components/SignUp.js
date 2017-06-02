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
      // confirmPass: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.state.name && this.state.email && this.state.password) {
      signInHelpers.signUp(this.state, this.props.updateCurrentUser)
    }
  }

  render() {
    return (
      <div style={stylePresets.horizontalCenter}>
        <form style={stylePresets.form} onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Full Name" style={stylePresets.textInput}
            onChange={e => { this.setState({ 'name': e.target.value }) }} required />

          <input type="email" placeholder="Email Address" style={stylePresets.textInput}
            onChange={e => { this.setState({ 'email': e.target.value }) }} required />

          <input type="password" placeholder="Password" style={stylePresets.textInput}
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
