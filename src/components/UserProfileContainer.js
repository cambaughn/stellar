/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import UserProfile from './UserProfile';

import { getUserById } from '../util/getUsers';
import { getQuestionsByUserId } from '../util/getQuestions';
import { follow, isFollowing } from '../util/follow';
import { updateFocusedUser, setFocusedUserQuestions } from '../redux/actionCreators';


class UserProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      following: false,
    }

    // this.handleFollow = this.handleFollow.bind(this);
    // this.checkFollowing = this.checkFollowing.bind(this);
    this.getData = this.getData.bind(this);
    this.store = this.props.store;
  }


  // handleFollow() {
  //   let followerId = this.store.getState().currentUser.id;
  //   let followingId = this.store.getState().focusedUser.id;
  //   follow(followerId, followingId, follow => this.checkFollowing(followerId, followingId));
  //
  //   this.getData(followingId);
  // }
  //
  // checkFollowing(followerId, followingId) {
  //   isFollowing(followerId, followingId, following => this.setState({ following }));
  // }

  getData(userId) {
    getUserById(userId, this.store.getState().currentUser.id, user => this.store.dispatch(updateFocusedUser(user)));
    getQuestionsByUserId(userId, questions => this.store.dispatch(setFocusedUserQuestions(questions)));
    // this.checkFollowing(this.store.getState().currentUser.id, userId);
  }

  render() {

    let userId = +this.props.match.params.userId;
    if (userId !== this.store.getState().focusedUser.id) {
      this.getData(userId);
    }

    return (
      <UserProfile user={this.store.getState().focusedUser}
        questions={this.store.getState().focusedUserQuestions}
        currentUser={this.store.getState().currentUser}
        getData={this.getData}
      />
    )
  }
}

export default UserProfileContainer;
