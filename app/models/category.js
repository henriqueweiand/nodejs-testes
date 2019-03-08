module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
  });

  Category.associate = (models) => {
    Category.belongsTo(models.DocumentCategory);
  };

  return Category;
};
