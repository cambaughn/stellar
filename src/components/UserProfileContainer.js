/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserProfile user={this.store.getState().focusedUser}
        questions={this.store.getState().focusedUserQuestions}
      />
    )
  }
}

export default UserProfileContainer;
