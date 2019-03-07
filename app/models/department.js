module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    title: DataTypes.STRING,
    DocumentId: DataTypes.INTEGER,
  });

  Department.associate = (models) => {
    Department.belongsTo(models.Document);
  };

  return Department;
};
