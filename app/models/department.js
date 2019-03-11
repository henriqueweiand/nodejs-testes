module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    title: DataTypes.STRING,
  });

  Department.associate = (models) => {
    Department.belongsToMany(models.Document, {
      through: 'DocumentDepartments',
      as: 'documents',
      foreignKey: 'DepartmentId',
    });
  };

  return Department;
};
