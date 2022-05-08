'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let photos = [
      {
        name: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        TypeRoomId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://www.hotellastrojes.com.mx/images/galerias/habitacion-sencilla-1533165647.jpg',
        TypeRoomId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        TypeRoomId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        TypeRoomId: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        TypeRoomId: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        TypeRoomId: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        TypeRoomId: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.pexels.com/photos/53577/hotel-architectural-tourism-travel-53577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        TypeRoomId: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'https://images.pexels.com/photos/6587907/pexels-photo-6587907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        TypeRoomId: 3, createdAt: new Date(), updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Photos', photos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
