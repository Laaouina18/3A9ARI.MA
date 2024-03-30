import express from 'express';
const router = express.Router();
import {isOwner} from '../middlewares/authMiddleware.js';
import { createHouse, getAllHouses, getHouseById, updateHouse, deleteHouse } from '../controllers/houseController.js';

router.post('/', isOwner,createHouse);
router.get('/', getAllHouses);
router.get('/:id', getHouseById);
router.put('/:id', isOwner,updateHouse);
router.delete('/:id',isOwner, deleteHouse);

export default router;
