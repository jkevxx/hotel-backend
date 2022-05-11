const express = require('express');
const router = express.Router();

const {
  getReservation
} = require('../controllers/reservationController');

router.get('/', getReservation);


module.exports = router;