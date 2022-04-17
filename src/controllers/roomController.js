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
  }
}

