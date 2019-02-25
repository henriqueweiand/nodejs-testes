const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('../app/models');

module.exports = {
  secret: 'kkkkkkkkkkkkkkkkkkkkkkk',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
};
