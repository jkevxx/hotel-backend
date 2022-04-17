'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentMethod.hasMany(models.PreReservation, { as: 'PreReservation', foreignKey: 'PaymentMethodId' });
      PaymentMethod.hasMany(models.Consumption, { as: 'Consumption', foreignKey: 'PaymentMethodId' })
    }
  }
  PaymentMethod.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentMethod',
  });
  return PaymentMethod;
};