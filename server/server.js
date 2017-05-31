
const express = require('express');
const app = express();

const models = require('../db/init.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/users', function (request, response) {
  models.User.findAll({ attributes: ['name', 'email', 'id']}).then(users => {
    response.send(users);
  })
})

app.get('/questions', function (request, response) {
  models.Question.findAll({
    include: [ { model: models.User, as: 'asker'}, { model: models.User, as: 'answerer'} ],
    attributes: ['text', 'id']
  })
    .then(questions => {
      response.send(questions);
    })
})

app.post('/login', (request, response) => {
  console.log(request.body)
  response.json(request.body);
})

app.post('/login', (request, response) => {
  models.User.findOrCreate({ where: {} })
})


app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
