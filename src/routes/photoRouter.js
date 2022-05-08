const express = require('express');
const router = express.Router();

const { getPhoto } = require('../controllers/photoController');


router.get('/', getPhoto);


module.exports = router;