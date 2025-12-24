import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
function TodoDetails(){

    const {todoId}=useParams()
    const [todo, setTodo]=useState('');
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((res)=>res.json())
        .then((data)=>setTodo(data))
    },[todoId])

    return(
        <div style={{padding:'20px 40%', margin:'10px', backgroundColor:'pink', fontWeight:'500' }}>
            <h2>Todo Details</h2>
            <p>Id: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Status: {todo.completed? 'completed':'Not completed'}</p>
        </div>
    )

}
export default TodoDetails;