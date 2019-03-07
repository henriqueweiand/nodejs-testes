const express = require('express');

const routes = express.Router();
const controllers = require('./controllers');

const guestMiddleware = require('./middlewares/guest');
const authMiddleware = require('./middlewares/auth');

// set locals
routes.use((req, res, next) => {
  res.locals.layout = 'layouts/default';
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

/**
 * Auth
 */
routes.get('/', guestMiddleware, controllers.authController.signin);
routes.get('/signup', guestMiddleware, controllers.authController.signup);
routes.get('/signout', controllers.authController.logout);

routes.post('/register', controllers.authController.register);
routes.post('/authenticate', controllers.authController.authenticate);

/**
 * Dashboard
 */
routes.use('/app', authMiddleware);
routes.get('/app/dashboard', controllers.dashboardController.index);

/**
 * Documents
 */
routes.get('/app/documents/:id', controllers.documentController.show);
routes.post('/app/documents/create', controllers.documentController.store);

/**
 * Category
 */
routes.post('/app/categories/create', controllers.categoryController.store);

/**
 * Department
 */
routes.post('/app/departments/create', controllers.departmentController.store);

// catch 404
routes.use((req, res) => res.render('errors/404'));

// error handler
routes.use((err, req, res, _next) => {
  res.status(err.status || 500);

  return res.render('errors/index', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

module.exports = routes;
