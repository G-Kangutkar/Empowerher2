import { useEffect } from "react";
import todoService from "../api/todoService";
import {  useParams } from "react-router-dom";
import { useState } from "react";

function TodoDetails(){
    const {id} =useParams();

    const {todo, getTodo, getTodoById} = todoService();
    const [todos,setTodos]=useState(null)

    useEffect(()=>{
        const fetchTodo =async()=>{
            const data= await getTodoById(id);
            setTodos(data)
    
        };
        fetchTodo();
        
    },[id,getTodoById])
    return(
        <>
        <div style={{backgroundColor:'#138eadff', padding:'20px',margin:'10px', width:'450px',marginLeft:'33%',textAlign:'left' , marginTop:'8%'}}>
            <h3 style={{textAlign:'center'}}>Todo Details</h3>
            <p>Id: {todos?.id}</p>
            <p>Title: {todos?.todo}</p>
            <p>Status: {todos?.completed? 'Done':'Not Done'}</p>
        </div>
        
        
        </>
    )
}
export default TodoDetails;