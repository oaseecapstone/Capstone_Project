'use strict';

const toJSON = require('../utils/toJson');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const json = toJSON("news.csv");
    console.log(json);
    return queryInterface.bulkInsert("news", json, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
