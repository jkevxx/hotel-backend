'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let services = [
      { name: 'Food', description: 'Food description', price: 100, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cleaning', description: 'Cleaning description', price: 200, createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert('Services', services, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});

  }
};
