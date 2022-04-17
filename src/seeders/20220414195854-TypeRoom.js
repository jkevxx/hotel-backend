'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let typeRooms = [
      { name: 'Basic', description: 'Room Basic', numRooms: 80, price: 1000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Junior', description: 'Room Junior', numRooms: 13, price: 2500, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Suit', description: 'Room Suit', numRooms: 7, price: 6000, createdAt: new Date(), updatedAt: new Date() }
    ]
    await queryInterface.bulkInsert('TypeRooms', typeRooms, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('TypeRooms', null, {});
  }
};
