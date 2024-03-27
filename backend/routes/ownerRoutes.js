import express from 'express';
const router = express.Router();
import {authMiddleware ,isOwner} from "../middlewares/authMiddleware.js";
import * as ownerController from '../controllers/ownerController.js';
router.get('/', ownerController.getAllOwners);
router.get('/:id', ownerController.getOwnerById);
router.put('/:id', ownerController.updateOwner);
router.delete('/:id', ownerController.deleteOwner);

export default router;
