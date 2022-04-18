const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const {
  getRoom,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom } = require('../controllers/roomController');

const {
  validateCreateRoom,
  validateConsultRoom,
  validateUpdateRoom,
  validateDeleteRoom } = require('../middleware/validators/roomValidator');


router.get('/', getRoom);
router.post('/', verifyToken, validateCreateRoom, createRoom);
router.get('/:id', verifyToken, validateConsultRoom, getRoomById);
router.put('/:id', validateUpdateRoom, updateRoom);
router.delete('/:id', validateDeleteRoom, deleteRoom);



module.exports = router;

