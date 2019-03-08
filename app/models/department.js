module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    title: DataTypes.STRING,
  });

  Department.associate = (models) => {
    Department.belongsToMany(models.Document, {
      through: models.DocumentDepartment,
      as: 'documents',
      foreignKey: 'DepartmentId',
    });
  };

  return Department;
};
