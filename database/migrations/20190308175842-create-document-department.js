module.exports = {
  up: (queryInterface, Sequelize) => {
    const DocumentDepartmentsTable = queryInterface.createTable('DocumentDepartments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      DocumentId: {
        type: Sequelize.INTEGER,
        references: { model: 'Documents', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      DepartmentId: {
        type: Sequelize.INTEGER,
        references: { model: 'Departments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    return DocumentDepartmentsTable;
  },

  down: queryInterface => queryInterface.dropTable('DocumentDepartments'),
};
