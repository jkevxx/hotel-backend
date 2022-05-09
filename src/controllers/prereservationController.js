const prereservation = require('../models').PreReservation;

module.exports = {
  async getPreReservation(req, res, next) {
    try {
      const data = await prereservation.findAll({ include: ['PaymentMethod'] })
      return res.json(data)
    } catch (error) {
      next(error)
    }
  },

  async createPreReservation(req, res, next) {
    let { name, lastName, cellphone, email, dateReservation, checkin, checkout, numRooms, totalPayment, PaymentMethodId } = req.body;
    try {
      let data = await prereservation.create({
        name, lastName, cellphone, email, dateReservation, checkin, checkout, numRooms, totalPayment, PaymentMethodId
      });
      return res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }


}