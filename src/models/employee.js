'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.TypeEmployee, { as: 'TypeEmployee' });
      Employee.hasMany(models.Reservation, { as: 'Reservation', foreignKey: 'EmployeeId' });
      Employee.hasMany(models.Consumption, { as: 'Consumption', foreignKey: 'EmployeeId' });
    }
  }
  Employee.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    TypeEmployeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};