'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PreReservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // PreReservation.belongsTo(models.Customer, { as: 'Customer' });
      PreReservation.belongsTo(models.PaymentMethod, { as: 'PaymentMethod' });
      PreReservation.belongsTo(models.Room, { as: 'Room' });

      PreReservation.hasMany(models.Reservation, { as: 'Reservation', foreignKey: 'PreReservationId' });
      PreReservation.hasMany(models.Consumption, { as: 'Consumption', foreignKey: 'PreReservationId' });
    }
  }
  PreReservation.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    email: DataTypes.STRING,
    dateReservation: DataTypes.DATE,
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE,
    numRooms: DataTypes.INTEGER,
    totalPayment: DataTypes.FLOAT,
    PaymentMethodId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PreReservation',
  });
  return PreReservation;
};