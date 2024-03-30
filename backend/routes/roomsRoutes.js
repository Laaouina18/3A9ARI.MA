import express from 'express';
const router = express.Router();
import { isOwner } from '../middlewares/authMiddleware.js';
import * as roomController from '../controllers/roomController.js';
router.post('/', isOwner,roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);
router.put('/:id',isOwner, roomController.updateRoom);
router.delete('/:id',isOwner, roomController.deleteRoom);

export default router;
