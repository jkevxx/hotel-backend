'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PreReservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(60)
      },
      lastName: {
        type: Sequelize.STRING(60)
      },
      cellphone: {
        type: Sequelize.STRING(10),
      },
      email: {
        type: Sequelize.STRING(60),
      },
      dateReservation: {
        type: Sequelize.DATE
      },
      checkin: {
        type: Sequelize.DATE
      },
      checkout: {
        type: Sequelize.DATE
      },
      numRooms: {
        type: Sequelize.INTEGER
      },
      totalPayment: {
        type: Sequelize.FLOAT
      },
      PaymentMethodId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PaymentMethods',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      RoomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rooms',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PreReservations');
  }
};