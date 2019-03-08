module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.Document, {
      through: models.DocumentCategory,
      as: 'documents',
      foreignKey: 'CategoryId',
    });
  };

  return Category;
};
