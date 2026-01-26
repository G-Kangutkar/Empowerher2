import express from "express";
import { sigupUser } from "../controllers/users.controller.js";

const router = express.Router();

router.post('/signup',sigupUser);

export default router;