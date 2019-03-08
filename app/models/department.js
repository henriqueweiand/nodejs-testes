module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    title: DataTypes.STRING,
  });

  Department.associate = (models) => {
    Department.belongsTo(models.DocumentDepartment);
  };

  return Department;
};
