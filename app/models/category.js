module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.Document, {
      through: 'DocumentCategories',
      as: 'categories',
      foreignKey: 'CategoryId',
    });
  };

  return Category;
};
