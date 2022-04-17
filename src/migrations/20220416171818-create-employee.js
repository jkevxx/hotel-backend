'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
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
        unique: true
      },
      email: {
        type: Sequelize.STRING(60),
        unique: true
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      username: {
        type: Sequelize.STRING(60),
        unique: true
      },
      password: {
        type: Sequelize.STRING(255)
      },
      TypeEmployeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TypeEmployees',
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
    await queryInterface.dropTable('Employees');
  }
};