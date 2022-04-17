'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consumption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Consumption.belongsTo(models.PreReservation, { as: 'PreReservation' });
      Consumption.belongsTo(models.Service, { as: 'Service' });
      Consumption.belongsTo(models.Employee, { as: 'Employee' });
      Consumption.belongsTo(models.PaymentMethod, { as: 'PaymentMethod' })
    }
  }
  Consumption.init({
    amount: DataTypes.INTEGER,
    totalPayment: DataTypes.FLOAT,
    dateConsumption: DataTypes.DATE,
    PreReservationId: DataTypes.INTEGER,
    ServiceId: DataTypes.INTEGER,
    EmployeeId: DataTypes.INTEGER,
    PaymentMethodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Consumption',
  });
  return Consumption;
};