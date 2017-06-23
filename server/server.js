
const express = require('express');
let redis = require("redis");
const bodyParser = require('body-parser');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
let client  = redis.createClient();
const app = express();

const models = require('../db/init.js');
let sess;

app.use(bodyParser.json()); // for parsing application/json


// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// SESSION
app.use(cookieParser()); // for parsing cookies
app.use(session({
  secret: 'keyboard cat',
  store: new RedisStore({ host: 'localhost', port: 6379, client: client}),
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: false, // don't save session if unmodified
  // saveUninitialized: false, // don't create session until something stored
}))


// USER routes
app.get('/users', function (request, response) {
  sess = sess || request.session;
  console.log('SESSION on all users route =====> ', sess);
  models.User.findAll({ attributes: ['name', 'email', 'id']}).then(users => {
    response.send(users);
  })
})

app.get('/user/:userId', (request, response) => {
  // Return the specific user
  models.User.findOne({
    where: { id: request.params.userId },
    attributes: ['name', 'email', 'bio', 'id']
  })
    .then(user => {
      response.send(user);
    })
    .catch(error => {
      console.error(error);
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

app.get('/questions/:userId', (request, response) => {
  console.log(request.params.userId)
  models.Question.findAll({
    where: { answererId: request.params.userId},
    include: [ { model: models.User, as: 'asker'}, { model: models.User, as: 'answerer'} ],
    attributes: ['text', 'id'],
    order: [['updatedAt', 'DESC']]
  })
    .then(questions => {
      response.send(questions);
    })
})


app.post('/questions/new', (request, response) => {
  let { text, askerId, answererId } = request.body;

  if (text && askerId && answererId) {
    models.Question.findOrCreate({ where: {text, askerId, answererId}})
      .spread((question, created) => {
        response.send(question);
      })
  } else {
    response.send('Error! Missing fields. Please try again.')
  }

})


// ANSWER routes

app.post('/answers/new', (request, response) => {

  console.log('-----------INCOMING VIDEO => ', request.body)
  response.send(request.body)
  // let { text, askerId, answererId } = request.body;
  //
  // if (text && askerId && answererId) {
  //   models.Question.findOrCreate({ where: {text, askerId, answererId}})
  //     .spread((question, created) => {
  //       response.send(question);
  //     })
  // } else {
  //   response.send('Error! Missing fields. Please try again.')
  // }

})

// LOGIN & SIGNUP routes
app.post('/login', (request, response) => {
  let { email, password } = request.body;

  models.User.findOne({ where: { email: email } })
    .then(user => {
      bcrypt.compare(password, user.password, function(error, result) {
        if (result) { // Passwords match
          sess = request.session;
          sess.user = user.name;
          sess.userId = user.id;
          console.log('SESSION on login =====> ', sess);
          response.statusCode = 200;
          response.send({ name: user.name, bio: user.bio, email: user.email, id: user.id });
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

  bcrypt.hash(request.body.password, 10, function(error, hash) {

    if (error) {
      console.error(error);
    } else {

      models.User.findOrCreate({ where: { email: email }, defaults: { name: name, password: hash}})
        .spread((user, created) => {
          response.statusCode = 201;
          response.send({ id: user.id, name: user.name, email: user.email, id: user.id });
        })
        .catch(error => {
          console.error(error);
          response.statusCode = 500;
          response.send(error);
        })
    }
  });
})




// FOLLOWER routes
app.post('/followers/new', (request, response) => {
  let { followerId, followingId } = request.body;

  if (followerId && followingId) {
    models.Follower.findOrCreate({
      where: { followerId, followingId },
      attributes: ['followerId', 'followingId']
    })
      .spread((follow, created) => {
        response.send(follow);
      })
      .catch(error => {
        response.send(error);
      })
  } else {
    response.send('Error! Missing fields.')
  }
})


app.post('/followers/is_following', (request, response) => {
  let { followerId, followingId } = request.body;

  console.log('FINDING FOLLOW => ', request.body)

  models.Follower.findOne({
    where: { followerId, followingId }
  })
    .then(follow => {
      response.send(!!follow);
    })
    .catch(error => {
      response.send(error);
    })
})


app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
