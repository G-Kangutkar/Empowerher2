import { useEffect } from "react";
import { useState } from "react";
import TodoCard from "./TodoCard";

function TodoList(){
    const [todos, setTodos]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>{
            if(!response.ok){
                throw new Error('Failed to load')
            }
            return response.json();
        })
        .then(data=>{
            setTodos(data.slice(0,15));
            setLoading(false);
        })
        .catch(error=>{
            console.error('Failed to load todos',error);
            setLoading(false);
        }
        )
        return ()=>{
            alert("CleanUp worked")
        };
    },[])
    if(loading){
        return(
            <div>Loading.....</div>
        )
    }
    

    return(
        <>
        <div>
        
        {todos.map(todo =>(
            <TodoCard
            key={todo.id}
            userId={todo.userId}
            title={todo.title}
            completed={todo.completed}/>
        ))}
        </div>
        </>
        



    )


}
export default TodoList;
