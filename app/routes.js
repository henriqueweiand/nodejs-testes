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
 * Documents
 */
routes.get('/app/documents', authMiddleware, controllers.documentController.index);
// routes.get('/app/documents/create', authMiddleware, controllers.documentController.create);
// routes.get('/app/documents/:id', authMiddleware, controllers.documentController.show);
// routes.post('/app/documents', authMiddleware, controllers.documentController.store);
// routes.put('/app/documents', authMiddleware, controllers.documentController.update);

/**
 * Category
 */
// routes.post('/app/categories/create', authMiddleware, controllers.categoryController.store);

/**
 * Department
 */
// routes.post('/app/departments/create', authMiddleware, controllers.departmentController.store);

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
