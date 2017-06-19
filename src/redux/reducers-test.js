import expect, { createSpy, spyOn, isSpy } from 'expect';
let deepfreeze = require('deepfreeze');

import { currentUser, questions, users, focusedUser, focusedUserQuestions } from './reducers';
import store from './store';

function testCurrentUser() {
  let userBefore = {};
  let userAfter = { name: 'Han Solo' };

  deepfreeze(userBefore);

  expect(
    currentUser(userBefore, {type: 'UPDATE_USER', user: userAfter}))
    .toEqual(userAfter);
}


function testFocusedUser() {
  let userBefore = {};
  let userAfter = { name: 'Han Solo' };

  deepfreeze(userBefore);

  expect(
    focusedUser(userBefore, {type: 'UPDATE_FOCUSED_USER', user: userAfter}))
    .toEqual(userAfter);
}


function testFocusedUserQuestions() {
  let stateBefore = [];
  let action = {
    type: 'SET_FOCUSED_USER_QUESTIONS',
    questions: [
      { text: 'Have you heard the tragedy of Darth Plagueis the Wise?'}
    ]
  }
  let stateAfter = [
    { text: 'Have you heard the tragedy of Darth Plagueis the Wise?'}
  ]

  deepfreeze(stateBefore);
  deepfreeze(action);

  expect(focusedUserQuestions(stateBefore, action)).toEqual(stateAfter);
}


function testQuestions() {
  let stateBefore = [];
  let action = {
    type: 'SET_QUESTIONS',
    questions: [
      { text: 'Have you heard the tragedy of Darth Plagueis the Wise?'}
    ]
  }
  let stateAfter = [
    { text: 'Have you heard the tragedy of Darth Plagueis the Wise?'}
  ]

  deepfreeze(stateBefore);

  expect(questions(stateBefore, action)).toEqual(stateAfter);
}

function testUsers() {
  let stateBefore = [];
  let action = { type: 'SET_USERS', users: [{ id: 1 }, { id: 2 }]};
  let stateAfter = [{ id: 1 }, { id: 2 }];

  deepfreeze(stateBefore);
  deepfreeze(action);

  expect(users(stateBefore, action))
  .toEqual(stateAfter);
}


testCurrentUser();
testFocusedUser();
testFocusedUserQuestions();
testQuestions();
testUsers();

console.log('All tests passed');

console.log(`State =>`, store.getState());

store.dispatch({ type: 'UPDATE_USER', user: { name: 'C3P0' } })
console.log(`State =>`, store.getState());

store.dispatch({ type: 'SET_QUESTIONS', questions: [{ text: 'I have a bad feeling about this' }] })
console.log(`State =>`, store.getState());
