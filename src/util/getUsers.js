
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

getUsers.findUser = (userId, callback) => {
  console.log('finding user => ', userId)
  fetch(`${baseUrl}/user/${userId}`)
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


export default getUsers;
