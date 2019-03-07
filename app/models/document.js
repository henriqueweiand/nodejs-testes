module.exports = (sequelize, dataTypes) => {
  const Document = sequelize.define('Document', {
    title: dataTypes.STRING,
    UserId: dataTypes.INTEGER,
  });

  // Document.associate = (models) => {
  //   Document.belongsTo(models.Department);
  //   Document.hasMany(models.Category);
  // };

  return Document;
};