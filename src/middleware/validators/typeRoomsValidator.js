const { check, param } = require('express-validator');
const validatorHandler = require('../validatorHandler');
const typeroom = require('../../models').TypeRoom;

const validateCreateTypeRoom = [
  check('name', "Name is required").notEmpty().isString(),
  check('description', "Description is required").notEmpty().isString(),
  check('numRooms', "Number of rooms is required").notEmpty().isInt(),
  check('price', "Prices is required").notEmpty().isDecimal(),
  (req, res, next) => {
    validatorHandler(req, res, next)
  }
];

const validateConsultTypeRoom = [
  param('id', "It has to be a number").exists().isInt().custom(async (value) => {
    try {
      let data = await typeroom.findOne({ where: { id: value } })
      // console.log(data);
      if (!data) {
        return Promise.reject("The type room doesn't exist");
      }
      return true;
    } catch (error) {

    }
  }),
  (req, res, next) => {
    validatorHandler(req, res, next)
  }
];

const validateUpdateTypeRoom = [
  param('id', "It has to be a number").exists().isInt().custom(async (value) => {
    try {
      let data = await typeroom.findOne({ where: { id: value } })
      // console.log(data);
      if (!data) {
        return Promise.reject("The type room doesn't exist");
      }
      return true;
    } catch (error) {

    }
  }),
  check('name', "Name is required").notEmpty().isString(),
  check('description', "Description is required").notEmpty().isString(),
  check('numRooms', "Number of rooms is required").notEmpty().isInt(),
  check('price', "Prices is required").notEmpty().isDecimal(),
  (req, res, next) => {
    validatorHandler(req, res, next)
  }
];


const validateDeleteTypeRoom = [
  param('id', "It has to be a number").exists().isInt().custom(async (value) => {
    try {
      let data = await typeroom.findOne({ where: { id: value } })
      // console.log(data);
      if (!data) {
        return Promise.reject("The type room doesn't exist");
      }
      return true;
    } catch (error) {

    }
  }),
  (req, res, next) => {
    validatorHandler(req, res, next)
  }
];


module.exports = { validateCreateTypeRoom, validateConsultTypeRoom, validateUpdateTypeRoom, validateDeleteTypeRoom }