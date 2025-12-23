import { useEffect, useState } from "react";

function Todos (){
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async()=>{
        try{
            const response= await fetch('https://jsonplaceholder.typicode.com/todos');
            if(!response.ok){
                throw new Error('Failed to fetch');
            }
            const data= await response.json();
            const first10Todo = data.slice(0,10);
            setTodos(first10Todo)
        }
        catch(err){
            console.error('error at fetch',err);
        }
    }

    return(
        <>
        <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)", gap:'10px'}}>
            {todos.map(todo=> (<div key={todo.id} style={{marginBottom:'10px', padding:'15px',border:'2px solid black',textAlign:"center",backgroundColor:"rgba(23, 133, 133, 1)" }} >
                <h4>Title: {todo.title}</h4>
                <p>Status: {todo.completed?"compleleted": 'Not Completed'}</p>
            </div>)
                
            )}
        </div>
        </>
    )

}
export default Todos;
