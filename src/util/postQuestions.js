const baseUrl = 'http://localhost:1337';

const postQuestions = {};

postQuestions.newQuestion = (question, callback) => {

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

// NOTE: Add form to post new questions - need to set up user profile first

// postQuestions.newQuestion({ text: 'what up bro', askerId: 1, answererId: 2 }, console.log)
