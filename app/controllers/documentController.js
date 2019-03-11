const { Document, Department, Category } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const documents = await Document.findAll({
        // where: { UserId: req.session.user.id },
        include: [
          {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
          },
          {
            model: Department,
            as: 'departments',
            through: { attributes: [] },
          },
        ],
      });
      console.log(JSON.stringify(documents));
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
        // include: [DocumentCategory, DocumentDepartment],
      });

      res.render('documents/show', { documents });
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const departments = await Department.findAll();
      const categories = await Category.findAll();

      res.render('documents/create', { categories, departments });
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const document = await Document.create({ ...req.body, UserId: req.session.user.id });
      await Category.create({
        CategoryId: req.body.category,
        DocumentId: document.id,
      });
      await Department.create({
        DepartmentId: req.body.department,
        DocumentId: document.id,
      });

      req.flash('success', 'Documento criado com sucesso');

      res.redirect('/app/documents');
    } catch (err) {
      next(err);
    }
  },
};
