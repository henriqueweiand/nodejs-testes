module.exports = {
  up: (queryInterface, Sequelize) => {
    const CategoriesTable = queryInterface.createTable('Categories', {
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

    return CategoriesTable;
  },

  down: queryInterface => queryInterface.dropTable('Categories'),
};
