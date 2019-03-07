module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    DocumentId: DataTypes.INTEGER,
  });

  Category.associate = (models) => {
    Category.hasMany(models.Document);
  };

  return Category;
};
