import express from "express";
import { addUser, getUserById, getUsers, updateUser } from "../controllers/users.controller.js";
import { checkInputField, checkUserId } from "../validations/users.validate.js";

const router = express.Router();

router.post("/add-user",checkInputField,addUser);
router.get('/',getUsers);
router.get("/:userId",checkUserId,getUserById);
router.put('/update-user/:userId',checkUserId,updateUser);


export default router;