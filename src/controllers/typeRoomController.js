const typeroom = require('../models').TypeRoom

module.exports = {
  async getTypeRoom(req, res, next) {
    try {
      let data = await typeroom.findAll({ include: ['Photo'] });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async createTypeRoom(req, res, next) {
    let { name, description, numRooms, price } = req.body;
    try {
      let data = await typeroom.create({
        name,
        description,
        numRooms,
        price
      });
      return res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  },

  async getTypeRoomById(req, res, next) {
    let { id } = req.params;
    try {
      let data = await typeroom.findOne({ include: ['Photo'], where: { id: id } });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async updateTypeRoom(req, res, next) {
    let { id } = req.params;
    let { name, description, numRooms, price } = req.body;
    try {
      let data = await typeroom.update({
        name,
        description,
        numRooms,
        price
      },
        { where: { id } }
      );

      return res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async deleteTypeRoom(req, res, next) {
    let { id } = req.params;
    try {
      let data = await typeroom.destroy({ where: { id } });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }
}




/* Way
async function index(req, res) {
  try {
    const data = await typeroom.findAll({});
    return res.json(data);
  } catch (error) {
    return res.status(404).json({ msg: error.msg });
  }

}
module.exports = { index };
*/

/* Way 2
const index = async (req, res) => {
  try {
    const data = await typeroom.findAll({});
    return res.json(data);
  } catch (error) {
    return res.status(404).json({ msg: error.msg });
  }
}
module.exports = { index };
*/
