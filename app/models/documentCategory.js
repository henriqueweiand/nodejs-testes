module.exports = (sequelize, dataTypes) => {
  const DocumentCategory = sequelize.define('DocumentCategories', {
    DocumentId: dataTypes.INTEGER,
    CategoryId: dataTypes.INTEGER,
  });

  DocumentCategory.associate = (models) => {
    DocumentCategory.hasMany(models.Document);
    DocumentCategory.hasMany(models.Category);
  };

  return DocumentCategory;
};
