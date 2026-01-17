import { readData, writeData } from "../models/todos.model.js";

export const postData =(req,res)=>{
    try {
        const data =readData();
    const newTodo = {
        id:data.todos.length >0 ? data.todos[data.todos.length -1].id+1:1,
        title: req.body.title
    }
    data.todos.push(newTodo);
    writeData(data);
    res.status(201).send("Todo added")
    } catch (error) {
        console.error("Error adding todos",error);
        res.status(500).json({
            error:"failed to add todo",
            message:error.message
        })
    }
    
}

export const getData=(req,res)=>{
    try {
        const data = readData();
    if(!data){
        return res.status(404).send("data not found")
    }
    res.status(200).json(data.todos)
    } catch (error) {
        console.error("Failed to get todos",error);
        res.status(404).send("Todos not found")
    }
    
}

export const updateData= (req,res)=>{
    try {
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
    } catch (error) {
        console.error("failed to update",error);
        res.status(500).send("Failed to update todos")
    }
    
}

export const deleteData =(req,res)=>{
    try {
        const data = readData();
    const todoId = parseInt(req.params.todoId);
    const todo = data.todos.filter(el=>el.id !== todoId);
    data.todos = todo;
    writeData(data);
    res.status(200).send("todo deleted")
    } catch (error) {
        console.error("Failed to delete",error);
        res.status(404).send("todos Not found")
    }
    
}