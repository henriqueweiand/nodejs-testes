module.exports = (sequelize, dataTypes) => {
  const Document = sequelize.define('Document', {
    id: dataTypes.STRING,
    title: dataTypes.STRING,
    category: dataTypes.STRING,
    department: dataTypes.STRING,
  });

  Document.associate = (models) => {
    Document.belongsTo(models.Department);
    Document.hasMany(models.Category);
  };

  return Document;
};
