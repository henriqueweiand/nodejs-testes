const { User } = require('../models');

module.exports = {
  async index(req, res) {
    const user = await User.findAll();

    res.render('index', { user });
  },
};
