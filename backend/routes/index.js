import express from 'express';
const  router = express.Router();
import authRoutes from './auth/AuthRoutes.js';
import ownersRoutes from './ownerRoutes.js';
import clientsRoutes from './clientsRoutes.js';
import conversationsRoutes from './conversationRoutes.js';
import housesRoutes from './housesRoutes.js';
import roomsRoutes from './roomsRoutes.js';
import floorsRoutes from './floorRoutes.js';
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to our application' });
});
router.use('/auth', authRoutes);
router.use('/owners', ownersRoutes);
router.use('/clients', clientsRoutes);
router.use('/conversations', conversationsRoutes);
router.use('/houses', housesRoutes);
router.use('/floors', floorsRoutes);
router.use('/rooms', roomsRoutes);

export default router;
