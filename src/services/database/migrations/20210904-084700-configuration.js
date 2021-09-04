module.exports = {
  up: (queryInterface, Sequelize) => {
    const createConfigurationTable = () => queryInterface.createTable('Configurations', {
      id: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      clientId: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      key: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING(2000),
        allowNull: true,
      },
      deleted: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0,
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

    return Promise.resolve()
      .then(createConfigurationTable);
  },
  down: (queryInterface) => {
    const dropConfigurationTable = () => queryInterface.dropTable('Configurations');
    return Promise.resolve()
      .then(dropConfigurationTable);
  },
};