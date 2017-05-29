
// This code will drop the existing db and create a new one - use with caution

const Sequelize = require('sequelize');

const sequelize = new Sequelize('stellar_test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// ============================ MODELS ============================

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
});

const Question = sequelize.define('question', {
  text: {
    type: Sequelize.STRING,
  },
  asker: {
    type: Sequelize.INTEGER,

    references: {
      model: User,
      key: 'id',
    }
  },
  answerer: {
    type: Sequelize.INTEGER,

    references: {
      model: User,
      key: 'id',
    }
  },
});


const Answer = sequelize.define('answer', {
  video_path: {
    type: Sequelize.STRING,
  },
  response_to: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: Question,
      // This is the column name of the referenced model
      key: 'id',
    }
  },
});



// ============================ Setup + Test ============================

// force: true will drop the table if it already exists
// the match regex will only do so if the db contains _test, will not do so in production
sequelize.sync({ force: true, match: /_test$/ }).then(() => {
  // Table created
  console.log('all tables created')

  User.create({
    firstName: 'George',
    lastName: 'Washington',
    email: 'george@gmail.com'
  }).then(() => {
    User.findOne().then(user => {
      console.log('USER ===> ', user.get('id'))
    })
  })

  User.create({
    firstName: 'John',
    lastName: 'Hancock',
    email: 'john@gmail.com'
  })

  Question.create({
    text: 'Hey, what\'s your favorite color?',
    asker: 1,
    answerer: 2
  }).then(() => {
    Question.findOne().then(question => {
      User.findOne({ where: { id: question.asker }}).then(asker => {
        console.log(`QUESTION ===> ${asker.firstName} ${asker.lastName} asks: ${question.text}`)
      })
    })
  })
});

const models = [User, Question, Answer];

// for (let i = 0; i < models.length; i++) {
//   let model = models[i];
//   console.log('Model!', model)
//   module.exports[model] = model;
// }


module.exports.sequelize = sequelize;
module.exports.User = User;
module.exports.Question = Question;
module.exports.Answer = Answer;
