import express from 'express';
const router = express.Router();
import { createHouse, getAllHouses, getHouseById, updateHouse, deleteHouse } from '../controllers/houseController.js';

router.post('/', createHouse);
router.get('/', getAllHouses);
router.get('/:id', getHouseById);
router.put('/:id', updateHouse);
router.delete('/:id', deleteHouse);

export default router;
