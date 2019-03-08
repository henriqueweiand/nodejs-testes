module.exports = (sequelize, dataTypes) => {
  const DocumentCategory = sequelize.define('DocumentCategory', {
    DocumentId: dataTypes.INTEGER,
    CategoryId: dataTypes.INTEGER,
  });

  return DocumentCategory;
};
