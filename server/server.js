
const express = require('express');
const app = express();

const models = require('../db/init.js');


app.get('/', function (req, res) {
  models.User.findAll({ attributes: ['firstName', 'lastName', 'email']}).then(users => {
    res.send(users);
  })
})


app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
