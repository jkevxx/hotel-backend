const express = require('express');
const router = express.Router();

const { getEmployee, createEmployee, login } = require('../controllers/employeeController');


router.get('/employees/', getEmployee);
router.post('/signup/', createEmployee);
router.post('/login/', login);

module.exports = router;