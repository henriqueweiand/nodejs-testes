module.exports = {
  up: (queryInterface, Sequelize) => {
    const DepartmentsTable = queryInterface.createTable('Departments', {
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
      title: {
        allowNull: false,
        type: Sequelize.STRING,
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

    return DepartmentsTable;
  },

  down: queryInterface => queryInterface.dropTable('Departments'),
};
