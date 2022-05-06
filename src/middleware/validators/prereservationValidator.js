const { check, param } = require('express-validator');
const validatorHandler = require('../validatorHandler');

const prereservation = require('../../models').Prereservation;

const validatePrereservation = [
  check('name', "Name is required").notEmpty().isString(),
  check('lastName', "Last name is required").notEmpty().isString(),
  check('cellphone', "Cellphone is required").notEmpty().isString(),
  check('dateReservation', "Date Reservation is required").notEmpty().isDate(),
  check('checkin', "Date Reservation is required").notEmpty().isDate(),
  check('checkout', "Date Reservation is required").notEmpty().isDate(),
  check('FloorId', "Floor Id is required").notEmpty().isInt(),


]
