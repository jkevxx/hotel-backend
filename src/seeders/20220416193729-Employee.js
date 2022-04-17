'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let employees = [
      { name: 'Elizabeth', lastName: 'Torres', cellphone: '3344556677', email: 'elizabeth@gmail.com', birthday: '1998-05-05', username: 'eli33', password: '123456789', TypeEmployeeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Montserrat', lastName: 'Castillo', cellphone: '2211334455', email: 'montserrat@gmail.com', birthday: '1999-06-06', username: 'mont22', password: '12345678', TypeEmployeeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alice', lastName: 'Paredes', cellphone: '1122334455', email: 'alice@gmail.com', birthday: '2000-07-07', username: 'alice11', password: '1234567', TypeEmployeeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pedro', lastName: 'Tangai', cellphone: '4455667788', email: 'pedro@gmail.com', birthday: '2000-08-08', username: 'pedro44', password: '123456', TypeEmployeeId: 3, createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert('Employees', employees, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});

  }
};
