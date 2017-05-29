
const baseUrl = 'http://localhost:1337/';

const getQuestions = {};

getQuestions.all = (callback) => {
  fetch(baseUrl)
    .then(users => {
      return users.json();
    })
    .then(users => {
      callback(users);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}


export default getQuestions;
