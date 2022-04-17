'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TypeRoom.hasMany(models.Room, { as: 'Room', foreignKey: 'TypeRoomId' });
      TypeRoom.hasMany(models.Photo, { as: 'Photo', foreignKey: 'TypeRoomId' });
    }
  }
  TypeRoom.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    numRooms: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'TypeRoom',
  });
  return TypeRoom;
};