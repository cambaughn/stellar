
const baseUrl = 'http://localhost:1337';

const getUsers = {};

getUsers.all = (callback) => {
  fetch(`${baseUrl}/users`)
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


export default getUsers;
