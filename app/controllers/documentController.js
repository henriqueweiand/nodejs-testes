const { Document } = require('../models');

module.exports = {
  async show(req, res, next) {
    try {
      const { id } = req.params;

      const documents = await Document.findAll({
        where: { UserId: req.session.user.id },
      });

      res.render('documents/show', { DocumentId: id, documents });
    } catch (err) {
      next(err);
    }
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
