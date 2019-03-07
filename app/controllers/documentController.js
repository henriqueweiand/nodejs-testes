const { Document, Category, Department } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const documents = await Document.findAll({
        where: { UserId: req.session.user.id },
        include: [Category, Department],
      });

      res.render('documents/index', { documents });
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;

      const documents = await Document.findAll({
        where: { UserId: req.session.user.id, id },
        include: [Category, Department],
      });

      res.render('documents/show', { documents });
    } catch (err) {
      next(err);
    }
  },

  create(req, res) {
    res.render('documents/create');
  },

  async store(req, res, next) {
    try {
      const document = await Document.create({ ...req.body, UserId: req.session.user.id });

      req.flash('success', 'Categoria criada com sucesso');

      res.redirect(`/app/documents/${document.id}`);
    } catch (err) {
      next(err);
    }
  },
};
