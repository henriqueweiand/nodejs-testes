module.exports = {
  up: (queryInterface, Sequelize) => {
    const SessionsTable = queryInterface.createTable('Sessions', {
      sid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      expires: Sequelize.DATE,
      data: Sequelize.TEXT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    return SessionsTable;
  },

  down: queryInterface => queryInterface.dropTable('Sessions'),
};
