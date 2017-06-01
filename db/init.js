
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
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
});

const Question = sequelize.define('question', {
  text: {
    type: Sequelize.STRING,
  },
});

Question.belongsTo(User, { as: 'asker'});
Question.belongsTo(User, { as: 'answerer'});


const Answer = sequelize.define('answer', {
  video_path: {
    type: Sequelize.STRING,
  },
});

Answer.belongsTo(Question);

// ============================ Setup + Test ============================

// force: true will drop the table if it already exists
// the match regex will only do so if the db contains _test, will not do so in production
sequelize.sync({ force: true, match: /_test$/ }).then(() => {
  // Table created
  console.log('all tables created')

  User.create({ name: 'Luke Skywalker', email: 'luke@gmail.com' })

  User.create({ name: 'Obi-Wan Kenobi', email: 'obi-wan@gmail.com' })

  User.create({ name: "Anakin Skywalker", email: "anakin@gmail.com", password: "$2a$10$/STx6KrERzjZb3wAaI0yqujRmtURSo2QMoRYW8k0VFoIen1xm7R2G" })

  Question.create({
    text: 'Hey, what\'s your favorite color?',
    askerId: 1,
    answererId: 2
  }).then(() => {
    Question.findOne({ include: [ { model: User, as: 'asker'}, { model: User, as: 'answerer'} ] }).then(question => {
      console.log(`QUESTION ===> ${question.asker.name} asks ${question.answerer.name}: ${question.text}`)
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
