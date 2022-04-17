'use strict';

// const typeRoom = require('../models').TypeRoom;

module.exports = {
  async up(queryInterface, Sequelize) {

    // let typeroomid = await typeRoom.findOne({ where: { name: 'Basic' } }).id;
    // console.log(typeroomid);
    let rooms = [
      { name: 'A-211', available: true, TypeRoomId: 1, FloorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'A-212', available: true, TypeRoomId: 1, FloorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'A-213', available: true, TypeRoomId: 2, FloorId: 2, createdAt: new Date(), updatedAt: new Date() }

    ];

    await queryInterface.bulkInsert('Rooms', rooms, {});


  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Rooms', null, {});

  }
};
