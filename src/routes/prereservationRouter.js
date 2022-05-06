const express = require('express');
const router = express.Router();


const {
  getPreReservation,
  createPreReservation
} = require('../controllers/prereservationController');



router.get('/', getPreReservation);
router.post('/', createPreReservation);



module.exports = router;
