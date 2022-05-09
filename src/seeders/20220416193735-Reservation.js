'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let reservations = [
      { arrival: '2022-04-16', departure: '2022-04-20', PreReservationId: 1, EmployeeId: 2, RoomId: 1, createdAt: new Date(), updatedAt: new Date() },
      { arrival: '2022-04-16', departure: '2022-04-17', PreReservationId: 2, EmployeeId: 3, RoomId: 1, createdAt: new Date(), updatedAt: new Date() },
      { arrival: '2022-04-16', departure: '2022-04-21', PreReservationId: 3, EmployeeId: 2, RoomId: 2, createdAt: new Date(), updatedAt: new Date() }
    ];
    await queryInterface.bulkInsert('Reservations', reservations, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});

  }
};
