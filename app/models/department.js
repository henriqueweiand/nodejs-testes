module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    title: DataTypes.STRING,
  });

  return Department;
};
