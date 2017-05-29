import React, { Component } from 'react';

import getUsers from '../util/getUsers';
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
  }

  findUsers() {
    if (!this.state.users.length) {
      return <div></div>
    } else {
      return (
        <div>
          <h2>Users</h2>
          { this.state.users.map(user => {
            console.log(user)
              return <p key={user.id}>{user.firstName} {user.lastName}</p>
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div style={stylePresets.centerAll}>
        { this.findUsers() }
      </div>
    );
  }
}

export default App;
