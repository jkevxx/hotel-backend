const { check, param } = require('express-validator');
const validatorHandler = require('../validatorHandler');
const room = require('../../models').Room;

const validateCreateRoom = [
  check('name', "Name is required").notEmpty().isString(),
  check('available', "Available is required").notEmpty().isBoolean(),
  check('TypeRoomId', "Type Room Id is required").notEmpty().isInt(),
  check('FloorId', "Floor Id is required").notEmpty().isInt(),
  (req, res, next) => {
    validatorHandler(req, res, next)
  }
];

const validateConsultRoom = [
  param('id', "It has to be a number").exists().isInt().custom(async (value) => {
    try {
      let data = await room.findOne({ where: { id: value } })
      // console.log(data);
      if (!data) {
        return Promise.reject("The room doesn't exist");
      }
      return true;
    } catch (error) {

    }
  }),
  (req, res, next) => {
    validatorHandler(req, res, next)
  }
];

const validateUpdateRoom = [
  param('id', "It has to be a number").exists().isInt().custom(async (value) => {
    try {
      let data = await room.findOne({ where: { id: value } })
      // console.log(data);
      if (!data) {
        return Promise.reject("The room doesn't exist");
      }
      return true;
    } catch (error) {

    }
  }),
  check('name', "Name is required").notEmpty().isString(),
  check('available', "Available is required").notEmpty().isBoolean(),
  check('TypeRoomId', "Type Room Id is required").notEmpty().isInt(),
  check('FloorId', "Floor Id is required").notEmpty().isInt(),
  (req, res, next) => {
    validatorHandler(req, res, next)
  }
];


const validateDeleteRoom = [
  param('id', "It has to be a number").exists().isInt().custom(async (value) => {
    try {
      let data = await room.findOne({ where: { id: value } })
      // console.log(data);
      if (!data) {
        return Promise.reject("The room doesn't exist");
      }
      return true;
    } catch (error) {

    }
  }),
  (req, res, next) => {
    validatorHandler(req, res, next)
  }
];


module.exports = { validateCreateRoom, validateConsultRoom, validateUpdateRoom, validateDeleteRoom }