const { Department } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const department = await Department.create({ ...req.body });

      req.flash('success', 'Departamento criada com sucesso');
    } catch (err) {
      next(err);
    }
  },
};
