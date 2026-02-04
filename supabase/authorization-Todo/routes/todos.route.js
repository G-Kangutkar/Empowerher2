import express from "express";
import { deleteTodo, getTodo, postTodo, updateTodo } from "../controllers/todos.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/add',authenticate,postTodo);
router.get('/',authenticate,getTodo);
router.put('/update/:id',authenticate,updateTodo);
router.delete('/delete/:id',authenticate,deleteTodo);



export default router;