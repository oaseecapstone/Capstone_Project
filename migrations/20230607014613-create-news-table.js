'use strict';

const { get } = require('../src/app');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('news', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING()
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING()
      },
      score: {
        allowNull: true,
        type: Sequelize.FLOAT()
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE(),
      },
      sentiment: {
        allowNull: false,
        type: Sequelize.ENUM('positive', 'negative', 'neutral')
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING()
      },
      summarize: {
        allowNull: false,
        type: Sequelize.STRING(3000)
      },
      keyword: {
        allowNull: false,
        type: Sequelize.STRING(3000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('news');
  }
};
