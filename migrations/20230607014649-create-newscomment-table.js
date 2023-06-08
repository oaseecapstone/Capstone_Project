'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('newscomment', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      newsId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'news',
          key: 'id',
        }
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      comment_time: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('newscomment');
  }
};
