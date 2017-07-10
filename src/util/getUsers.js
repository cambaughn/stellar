/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import { get, post } from './getPostMethods';

const getUsers = {};

function getAllUsers(callback) {
  get('/users', callback);
}

function getUserById(userId, currentUserId, callback) {
  let body = { userId, currentUserId };
  post(`/user_profile`, body, callback);
}


export { getAllUsers, getUserById };
