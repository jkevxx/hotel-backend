const express = require('express');
const router = express.Router();

const { verifyToken, verifyAdmin, verifyReceptionist } = require('../middleware/auth');

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
router.post('/', [verifyToken, verifyAdmin], validateCreateRoom, createRoom);
router.get('/:id', verifyToken, validateConsultRoom, getRoomById);
router.put('/:id', [verifyToken, verifyAdmin], validateUpdateRoom, updateRoom);
router.delete('/:id', [verifyToken, verifyAdmin], validateDeleteRoom, deleteRoom);



module.exports = router;

