module.exports = {
  up: (queryInterface, Sequelize) => {
    const DocumentCategoriesTable = queryInterface.createTable('DocumentCategories', {
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
      CategoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id' },
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

    return DocumentCategoriesTable;
  },

  down: queryInterface => queryInterface.dropTable('DocumentCategories'),
};
