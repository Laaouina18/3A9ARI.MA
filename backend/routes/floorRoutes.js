import express from 'express';
const router = express.Router();
import { createFloor, getAllFloors, getFloorById, updateFloor, deleteFloor } from '../controllers/floorController.js';

router.post('/', createFloor);
router.get('/', getAllFloors);
router.get('/:id', getFloorById);
router.put('/:id', updateFloor);
router.delete('/:id', deleteFloor);

export default router;
