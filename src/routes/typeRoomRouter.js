/**
 * This Router is exported for index to call each different route
 */

const express = require('express');
const router = express.Router();

// Call the validations of middleware/validators
const {
  validateCreateTypeRoom,
  validateConsultTypeRoom,
  validateUpdateTypeRoom,
  validateDeleteTypeRoom } = require('../middleware/validators/typeRoomsValidator');

// Call each method of controllers 
const {
  getTypeRoom,
  createTypeRoom,
  getTypeRoomById,
  updateTypeRoom,
  deleteTypeRoom } = require('../controllers/typeRoomController');

router.get('/', getTypeRoom);
router.post('/', validateCreateTypeRoom, createTypeRoom);
router.get('/:id', validateConsultTypeRoom, getTypeRoomById);
router.put('/:id', validateUpdateTypeRoom, updateTypeRoom);
router.delete('/:id', validateDeleteTypeRoom, deleteTypeRoom);

module.exports = router;
