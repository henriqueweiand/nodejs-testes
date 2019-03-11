module.exports = (sequelize, dataTypes) => {
  const Document = sequelize.define('Document', {
    title: dataTypes.STRING,
    UserId: dataTypes.INTEGER,
  });

  Document.associate = (models) => {
    Document.belongsToMany(models.Department, {
      through: 'DocumentDepartments',
      as: 'departments',
      foreignKey: 'DocumentId',
    });
    // Document.belongsToMany(models.Category, {
    //   through: 'DocumentCategories',
    //   as: 'categories',
    //   foreignKey: 'CategoryId',
    // });
  };

  return Document;
};
