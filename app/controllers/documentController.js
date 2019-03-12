const { Document, Department, Category } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const documents = await Document.findAll({
        where: { UserId: req.session.user.id },
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
      const departments = await Department.findAll();
      const categories = await Category.findAll();

      const documents = await Document.findOne({
        where: { UserId: req.session.user.id, id },
        include: [
          {
            model: Category,
            as: 'categories',
            through: { attributes: ['id'] },
          },
          {
            model: Department,
            as: 'departments',
            through: { attributes: [] },
          },
        ],
      });
      res.render('documents/createOrUpdate', { documents, categories, departments });
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const departments = await Department.findAll();
      const categories = await Category.findAll();

      res.render('documents/createOrUpdate', { categories, departments });
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const { department, category, ...data } = req.body;

      const document = await Document.create({ ...data, UserId: req.session.user.id });

      if (department && department.length > 0) {
        document.setDepartments(department);
      }

      if (category && category.length > 0) {
        document.setCategories(category);
      }

      req.flash('success', 'Documento criado com sucesso');

      res.redirect('/app/documents');
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const { department, category, ...data } = req.body;

      const document = await Document.findById(data.documentId);
      document.update(data);

      if (department && department.length > 0) {
        document.setDepartments(department);
      }

      if (category && category.length > 0) {
        document.setCategories(category);
      }

      req.flash('success', 'Documento atualizado com sucesso');

      res.redirect('/app/documents');
    } catch (err) {
      next(err);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const document = await Document.findById(id);
      document.destroy();

      req.flash('success', 'Documento removido com sucesso');

      res.redirect('/app/documents');
    } catch (err) {
      next(err);
    }
  },
};
