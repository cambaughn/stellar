
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');

const models = require('../db/init.js');

app.use(bodyParser.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// USER routes
app.get('/users', function (request, response) {
  models.User.findAll({ attributes: ['name', 'email', 'id']}).then(users => {
    response.send(users);
  })
})


// QUESTION routes
app.get('/questions', function (request, response) {
  models.Question.findAll({
    include: [ { model: models.User, as: 'asker'}, { model: models.User, as: 'answerer'} ],
    attributes: ['text', 'id']
  })
    .then(questions => {
      response.send(questions);
    })
})

// LOGIN & SIGNUP routes
app.post('/login', (request, response) => {
  let { name, email, password } = request.body;

  models.User.findOne({ where: { email: email } })
    .then(user => {
      bcrypt.compare(password, user.password, function(error, result) {
        if (result) { // Passwords match
          response.statusCode = 200;
          response.send(user);
        } else { // Passwords do not match
          console.log(error)
          response.statusCode = 404;
          response.send('Incorrect password');
        }
      });
    })
    .catch(error => { // Error finding the user record in the database
      response.statusCode = 404;
      response.send(error);
    })

});



app.post('/signup', (request, response) => {
  let { name, email, password } = request.body;

  console.log('incoming! =>>>> ', name, email, password);

  bcrypt.hash(request.body.password, 10, function(error, hash) {

    if (error) {
      console.error(error);
    } else {

      models.User.findOrCreate({ where: { email: email }, defaults: { name: name, password: hash}})
        .spread((user, created) => {
          response.statusCode = 201;
          response.send(user);
        })
        .catch(error => {
          console.error(error);
          response.statusCode = 500;
          response.send(error);
        })
    }
  });
})


app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
