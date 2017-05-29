
const express = require('express');
const app = express();

const models = require('../db/init.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/users', function (request, response) {
  models.User.findAll({ attributes: ['firstName', 'lastName', 'email', 'id']}).then(users => {
    response.send(users);
  })
})


app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
