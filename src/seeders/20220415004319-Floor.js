'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let floors = [
      { number: 1, createdAt: new Date(), updatedAt: new Date() }, { number: 2, createdAt: new Date(), updatedAt: new Date() },
      { number: 3, createdAt: new Date(), updatedAt: new Date() }, { number: 4, createdAt: new Date(), updatedAt: new Date() },
      { number: 5, createdAt: new Date(), updatedAt: new Date() }, { number: 6, createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert('Floors', floors, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Floors', null, {});
  }
};
