import express from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todos.controller.js";
import {  todoValidation } from "../validations/todos.validate.js";

const router = express.Router();

router.post('/add-todo',todoValidation,addTodo);
router.get('/get-my-todo/:userId',getTodos);
router.put('/update-todo/:todoId',updateTodo);
router.delete('/delete-todo/:todoId',deleteTodo);

export default router;