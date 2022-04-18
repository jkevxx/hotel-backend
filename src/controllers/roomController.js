const room = require('../models').Room;
// const typeRoom = require('../models').TypeRoom;

module.exports = {
  async getRoom(req, res, next) {
    try {
      const data = await room.findAll({ include: ['TypeRoom', 'Floor'] })
      return res.json(data)
    } catch (error) {
      next(error);
    }
  },

  async createRoom(req, res, next) {
    let { name, available, TypeRoomId, FloorId } = req.body;
    try {
      let data = await room.create({
        name,
        available,
        TypeRoomId,
        FloorId
      });
      return res.status(201).json(data)
    } catch (error) {
      next(error);
    }
  },

  async getRoomById(req, res, next) {
    let { id } = req.params;
    try {
      let data = await room.findOne({ where: { id } });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async updateRoom(req, res, next) {
    let { id } = req.params;
    let { name, available, TypeRoomId, FloorId } = req.body;
    try {
      let data = await room.update({ name, available, TypeRoomId, FloorId }, { where: { id } });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async deleteRoom(req, res, next) {
    let { id } = req.params;
    try {
      let data = await room.destroy({ where: { id } });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }
}

