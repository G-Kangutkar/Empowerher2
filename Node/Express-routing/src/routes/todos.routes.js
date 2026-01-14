import express from "express";
import {writeFileSync, readFileSync} from "fs";
const route = express.Router();

function readData (){
    const data = readFileSync('./db.json','utf-8');
    return JSON.parse(data);
}

function writeData(data){
    writeFileSync("./db.json",JSON.stringify(data,null,2))
}

route.post('/add',(req,res)=>{
    const data = readData();
    const newTodo = {
        id: data.todos.length >0 ? data.todos[data.todos.length-1].id+1:1,
        title:req.body.title,
        completed:req.body.completed
    }
    data.todos.push(newTodo);
    writeData(data);
    res.status(201).send("Todo added")
});

route.get("/",(req,res)=>{
    const data = readData();
    res.status(200).json(data.todos);
});

route.get("/:todoId",(req,res)=>{
    const data = readData();
    const todoId = parseInt(req.params.todoId);
    const todo = data.todos.find(el=>el.id === todoId);
    if(!todo){
        return res.status(400).json({message:"todo not found"})
    }
    res.status(200).json(todo)
});

route.put('/update/:todoId',(req,res)=>{
    const data = readData();
    const todoId = parseInt(req.params.todoId);
    const newStatus = {
        completed:req.body.completed}
    const todo = data.todos.map(el=>el.id === todoId ? {...el,...newStatus}:el);
    data.todos = todo;
    writeData(data);
    res.status(200).send("todos updated")
});

route.delete('/delete/:todoId',(req,res)=>{
    const data = readData();
    const todoId = parseInt(req.params.todoId);
    const todo = data.todos.filter(el=>el.id !== todoId);
    data.todos =todo;
    writeData(data);
    res.status(200).send("Todo is deleted")
})

export default route;