module.exports = (sequelize, dataTypes) => {
  const Document = sequelize.define('Document', {
    title: dataTypes.STRING,
    UserId: dataTypes.INTEGER,
  });

  Document.associate = (models) => {
    Document.belongsToMany(models.Department, {
      through: models.DocumentDepartment,
      as: 'departments',
      foreignKey: 'DepartmentId',
    });
    Document.belongsToMany(models.Category, {
      through: models.DocumentCategory,
      as: 'categories',
      foreignKey: 'CategoryId',
    });
  };

  return Document;
};
