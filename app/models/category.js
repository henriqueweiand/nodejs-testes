module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    DocumentId: DataTypes.INTEGER,
  });

  Category.associate = (models) => {
    Category.belongsTo(models.Document);
  };

  return Category;
};
