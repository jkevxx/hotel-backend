'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let typeEmployees = [
      { name: 'Admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Receptionist', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cleaner', createdAt: new Date(), updatedAt: new Date() }
    ];
    await queryInterface.bulkInsert('TypeEmployees', typeEmployees, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeEmployees', null, {});
  }
};
