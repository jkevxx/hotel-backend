'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Floor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Floor.hasMany(models.Room, { as: 'Room', foreignKey: 'FloorId' });
    }
  }
  Floor.init({
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Floor',
  });
  return Floor;
};