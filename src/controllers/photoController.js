const photo = require('../models').Photo;


module.exports = {
  async getPhoto(req, res, next) {
    try {
      const data = await photo.findAll({ include: ['TypeRoom'] })
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }


}