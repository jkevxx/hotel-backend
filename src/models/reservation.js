'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.PreReservation, { as: 'PreReservation' });
      Reservation.belongsTo(models.Employee, { as: 'Employee' })
      Reservation.belongsTo(models.Room, { as: 'Room' });

    }
  }
  Reservation.init({
    arrival: DataTypes.DATE,
    departure: DataTypes.DATE,
    PreReservationId: DataTypes.INTEGER,
    EmployeeId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};