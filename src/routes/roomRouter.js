const express = require('express');
const router = express.Router();
const { getRoom } = require('../controllers/roomController');



router.get('/', getRoom);



module.exports = router;

