
const baseUrl = 'http://localhost:1337'

const signInHelpers = {};

signInHelpers.signUp = (user, callback) => {

  let headers = new Headers({
      'Content-Type': 'application/json',
  });

  let init = { method: 'POST',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(user)
              };

  fetch(`${baseUrl}/signup`, init)
    .then(user => {
      return user.json();
    })
    .then(user => {
      callback(user);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}

signInHelpers.logIn = (user, callback) => {

    let headers = new Headers({
        'Content-Type': 'application/json',
    });

    let init = { method: 'POST',
                  mode: 'cors',
                  headers: headers,
                  body: JSON.stringify(user)
                };

    fetch(`${baseUrl}/login`, init)
      .then(user => {
        return user.json();
      })
      .then(user => {
        callback(user);
      })
      .catch(error => {
        console.log(`ERROR => ${error}`);
      })
}


export default signInHelpers;
