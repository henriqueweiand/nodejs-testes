module.exports = (sequelize, dataTypes) => {
  const DocumentDepartments = sequelize.define('DocumentDepartments', {
    DocumentId: dataTypes.INTEGER,
    DepartmentId: dataTypes.INTEGER,
  });

  return DocumentDepartments;
};
