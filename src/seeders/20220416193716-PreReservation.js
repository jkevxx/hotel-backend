'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let preReservations = [
      { dateReservation: '2022-04-16', checking: '2022-04-16', checkout: '2022-04-20', numRooms: 2, totalPayment: 2500, CustomerId: 1, PaymentMethodId: 1, RoomId: 1, createdAt: new Date(), updatedAt: new Date() },
      { dateReservation: '2022-04-16', checking: '2022-04-16', checkout: '2022-04-17', numRooms: 1, totalPayment: 1500, CustomerId: 2, PaymentMethodId: 1, RoomId: 1, createdAt: new Date(), updatedAt: new Date() },
      { dateReservation: '2022-04-16', checking: '2022-04-16', checkout: '2022-04-21', numRooms: 1, totalPayment: 2000, CustomerId: 3, PaymentMethodId: 2, RoomId: 3, createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert('PreReservations', preReservations, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PreReservations', null, {});
  }
};
