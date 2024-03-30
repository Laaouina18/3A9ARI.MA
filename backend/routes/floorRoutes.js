import express from 'express';
const router = express.Router();
import { isOwner } from '../middlewares/authMiddleware.js';
import { createFloor, getAllFloors, getFloorById, updateFloor, deleteFloor } from '../controllers/floorController.js';
router.post('/',isOwner, createFloor);
router.get('/',getAllFloors);
router.get('/:id',getFloorById);
router.put('/:id',isOwner, updateFloor);
router.delete('/:id',isOwner, deleteFloor);

export default router;
