module.exports = (sequelize, dataTypes) => {
  const DocumentDepartments = sequelize.define('DocumentDepartments', {
    DocumentId: dataTypes.INTEGER,
    DepartmentId: dataTypes.INTEGER,
  });

  DocumentDepartments.associate = (models) => {
    DocumentDepartments.hasMany(models.Document);
    DocumentDepartments.hasMany(models.Department);
  };

  return DocumentDepartments;
};
