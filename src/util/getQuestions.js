
const baseUrl = 'http://localhost:1337';

const getQuestions = {};

getQuestions.all = (callback) => {
  fetch(`${baseUrl}/questions`)
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

getQuestions.forUser = (userId, callback) => {
  fetch(`${baseUrl}/questions/${userId}`)
    .then(questions => {
      return questions.json();
    })
    .then(questions => {
      callback(questions);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}


export default getQuestions;
