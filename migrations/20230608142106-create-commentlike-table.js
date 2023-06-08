'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('commentlike', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      commentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'newscomment',
          key: 'id'
        },
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      newsId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'news',
          key: 'id'
        },
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
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('commentlike');
  }
};
