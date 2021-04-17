'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('powerstats', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      intelligence: {
        type: Sequelize.INTEGER
      },
      strength: {
        type: Sequelize.INTEGER
      },
      speed: {
        type: Sequelize.INTEGER
      },
      durability: {
        type: Sequelize.INTEGER
      },
      power: {
        type: Sequelize.INTEGER
      },
      combat: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('powerstats');
  }
};