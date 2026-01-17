import express from "express";
import { postData,getData,updateData,deleteData } from "../controller/todos.controller.js";
import limited from "../middleware/rateLimiter.middleware.js";
import checkValidation from "../middleware/validateTodo.middleware.js";

const route = express.Router();

route.post("/add",checkValidation,postData);

route.get('/',limited,getData);

route.put('/update/:todoId',updateData);

route.delete('/delete/:todoId',deleteData);

export default route;