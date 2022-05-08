'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let typeRooms = [
      { name: 'Basic', description: 'Room Basic Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', numRooms: 80, price: 1000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Junior', description: 'Room Junior Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', numRooms: 13, price: 2500, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Suit', description: 'Room Suit Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', numRooms: 7, price: 6000, createdAt: new Date(), updatedAt: new Date() }
    ]
    await queryInterface.bulkInsert('TypeRooms', typeRooms, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('TypeRooms', null, {});
  }
};
