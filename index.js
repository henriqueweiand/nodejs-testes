require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./app/routes');
const sessionConfig = require('./config/session');

const app = express();
app.use(express.static(path.resolve('app', 'public')));

nunjucks.configure(path.join('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');

app.use(session(sessionConfig));
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

app.listen(3000);
