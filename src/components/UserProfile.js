/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import getUsers from '../util/getUsers';
import stylePresets from '../util/stylePresets';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      questions: []
    }
  }

  componentDidMount() {
    getUsers.findUser(1, this.setUser.bind(this))
  }

  setUser(user) {
    this.setState({ user });
  }

  render() {
    let { name, bio } = this.state.user;

    return (
      <div style={stylePresets.horizontalCenter}>
        <h2>{name}</h2>
        <h4>{bio}</h4>
        <div>
          {this.state.questions}
        </div>

      </div>
    )
  }
}

export default UserProfile;
