const { Category } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const category = await Category.create({ ...req.body });

      req.flash('success', 'Categoria criada com sucesso');
    } catch (err) {
      next(err);
    }
  },
};
