'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let consumptions = [
      { amount: 1, totalPayment: 100, dateConsumption: '2022-04-19', PreReservationId: 1, ServiceId: 1, EmployeeId: 2, PaymentMethodId: 1, createdAt: new Date(), updatedAt: new Date() },
      { amount: 2, totalPayment: 400, dateConsumption: '2022-04-19', PreReservationId: 1, ServiceId: 2, EmployeeId: 2, PaymentMethodId: 1, createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert('Consumptions', consumptions, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Consumptions', null, {});

  }
};
