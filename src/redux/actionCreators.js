import { UPDATE_USER, SET_QUESTIONS, SET_USERS } from './actionTypes';

function setUsers(users) {
  return {
    type: SET_USERS,
    users
  }
}

function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions
  }
}

export { setUsers, setQuestions };
