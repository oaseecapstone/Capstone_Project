'use strict';

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
      newslikeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Newslike',
          key: 'id',
        }
      },
      newscommentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Newscomment',
          key: 'id',
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sentiment: {
        allowNull: false,
        type: Sequelize.ENUM('positive', 'negative', 'neutral')
      },
      score: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      Url: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      summerize: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      keyword: {
        allowNull: false,
        type: Sequelize.STRING(100)
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
