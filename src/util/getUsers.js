/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import { get } from './getPostMethods';

const getUsers = {};

function getAllUsers(callback) {
  get('/users', callback);
}

function getUserById(userId, callback) {
  get(`/user/${userId}`, callback);
}


export { getAllUsers, getUserById };
