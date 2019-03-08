module.exports = (sequelize, dataTypes) => {
  const DocumentDepartments = sequelize.define('DocumentDepartment', {
    DocumentId: dataTypes.INTEGER,
    DepartmentId: dataTypes.INTEGER,
  });

  return DocumentDepartments;
};
