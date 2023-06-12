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
    return queryInterface.bulkDelete("news", null, {});
  }
};
