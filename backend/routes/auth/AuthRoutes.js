import {Router} from "express";
const router = Router();

import {Login,register} from "../../controllers/auth/AuthController.js";
router.post("/login",Login)
router.post("/register",register)
export default router;