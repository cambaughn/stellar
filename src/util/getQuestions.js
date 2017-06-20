/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import { get } from './getPostMethods';

function getAllQuestions(callback) {
  get('/questions', callback);
}

function getQuestionsByUserId(userId, callback) {
  get(`/questions/${userId}`, callback);
}

export { getAllQuestions, getQuestionsByUserId };
