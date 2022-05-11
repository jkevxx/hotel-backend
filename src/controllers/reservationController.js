const reservation = require('../models').Reservation;

module.exports = {
  async getReservation(req, res, next) {
    try {
      const data = await reservation.findAll({ include: ['PreReservation', 'Employee', 'Room'] });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }

}

