module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    name: dataTypes.STRING,
    email: dataTypes.STRING,
    password: dataTypes.STRING,
  });

  return User;
};
