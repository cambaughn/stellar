
const baseUrl = 'http://localhost:1337';

const postQuestion = {};


postQuestion.new = (question, callback) => {

  let headers = new Headers({
      'Content-Type': 'application/json',
  });

  let init = { method: 'POST',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(question)
              };

  fetch(`${baseUrl}/questions/new`, init)
    .then(question => {
      return question.json();
    })
    .then(question => {
      callback(question);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}


export default postQuestion;
