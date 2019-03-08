module.exports = {
  up: (queryInterface, Sequelize) => {
    const DepartmentsTable = queryInterface.createTable('Departments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
