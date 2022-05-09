'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasMany(models.Reservation, { as: 'Reservation', foreignKey: 'RoomId' });
      Room.belongsTo(models.TypeRoom, { as: 'TypeRoom' });
      Room.belongsTo(models.Floor, { as: 'Floor' });

    }
  }
  Room.init({
    name: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    TypeRoomId: DataTypes.INTEGER,
    FloorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};