import express from "express";
import {readFileSync, writeFileSync} from "fs";
import limited from "../middleware/rateLimiter.middleware.js";
import checkValidation from "../middleware/validateTodo.middleware.js";

const route = express.Router();

function readData(){
    const data = readFileSync('./db.json','utf-8');
    return JSON.parse(data);
}
function writeData(data){
    return writeFileSync('./db.json',JSON.stringify(data,null,2));
}

route.post("/add",checkValidation,(req,res)=>{
    const data =readData();
    const newTodo = {
        id:data.todos.length >0 ? data.todos[data.todos.length -1].id+1:1,
        title: req.body.title
    }
    data.todos.push(newTodo);
    writeData(data);
    res.status(201).send("Todo added")
});

route.get('/',limited,(req,res)=>{
    const data = readData();
    if(!data){
        return res.status(404).send("data not found")
    }
    res.status(200).json(data.todos)
});

route.put('/update/:todoId',(req,res)=>{
    const data = readData();
    const todoId = parseInt(req.params.todoId);
    const updatedData ={
        title: req.body.title,
        completed:req.body.completed
    }
    const todo = data.todos.map(el=>el.id === todoId ? {...el, ...updatedData}:el);
    data.todos =todo;
    writeData(data);
    res.status(200).send('todo updated')
});

route.delete('/delete/:todoId',(req,res)=>{
    const data = readData();
    const todoId = parseInt(req.params.todoId);
    const todo = data.todos.filter(el=>el.id !== todoId);
    data.todos = todo;
    writeData(data);
    res.status(200).send("todo deleted")
});

export default route;