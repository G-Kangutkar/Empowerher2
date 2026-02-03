import express from "express";
import { login, signup } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/',signup);
router.get('/',login)

export default router;