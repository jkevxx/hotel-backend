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
      PreReservation.belongsTo(models.Customer, { as: 'Customer' });
      PreReservation.belongsTo(models.PaymentMethod, { as: 'PaymentMethod' });
      PreReservation.belongsTo(models.Room, { as: 'Room' });

      PreReservation.hasMany(models.Reservation, { as: 'Reservation', foreignKey: 'PreReservationId' });
      PreReservation.hasMany(models.Consumption, { as: 'Consumption', foreignKey: 'PreReservationId' });
    }
  }
  PreReservation.init({
    dateReservation: DataTypes.DATE,
    checking: DataTypes.DATE,
    checkout: DataTypes.DATE,
    numRooms: DataTypes.INTEGER,
    totalPayment: DataTypes.FLOAT,
    CustomerId: DataTypes.INTEGER,
    PaymentMethodId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PreReservation',
  });
  return PreReservation;
};