'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let photos = [
      {
        name: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        TypeRoomId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        TypeRoomId: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        TypeRoomId: 3, createdAt: new Date(), updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Photos', photos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
