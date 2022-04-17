'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let customers = [
      { name: 'Kevin', lastName: 'Paez', cellphone: '2211169762', email: 'kevin.paez@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Carlos', lastName: 'Vazquez', cellphone: '2211445577', email: 'carlos@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juan', lastName: 'Tamal', cellphone: '2211449977', email: 'juan@gmail.com', createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert('Customers', customers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});

  }
};
