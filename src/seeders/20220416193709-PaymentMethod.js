'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let paymentMethods = [
      { name: 'Visa', createdAt: new Date(), updatedAt: new Date() },
      { name: 'America Express', createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert('PaymentMethods', paymentMethods, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PaymentMethods', null, {});
  }
};
