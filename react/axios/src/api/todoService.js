import { useState } from "react";
import api from "./axiosInstance";

function todoService(){

    const [todo,setTodo]=useState([]);

    const getTodo= async()=>{
        try {
            const response = await api.get('/todos');
            setTodo(response.data.todos);
            return response.data.todos
            
        } catch (error) {
            console.log(error)
            
        }
    }
    const  getTodoById = async (id)=>{
        try {
            const response = await api.get(`/todos/${id}`);
            return response.data
        } catch (error) {
            console.log(error)
            
        }
    }

    return{ todo, getTodo, getTodoById }
    

}
export default todoService;