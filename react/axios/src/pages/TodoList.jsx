import { useEffect } from "react";
import todoService from "../api/todoService";
import { Link } from "react-router-dom";

function TodoList(){

    const {todo, getTodo } = todoService();
    

    useEffect(()=>{
        getTodo();
    },[]);

    return(
        <>
        <div style={{textAlign:'center', padding:'20px',margin:'5px'}}> 
             <h3>Todo List </h3>
            <div style={{backgroundColor:'pink', padding:'15px',margin:'10px', width:'450px',marginLeft:'33%',textAlign:'left'}}>
                { todo.length >0 ?( todo.map(item=> <Link key={item.id} to={`/todos/${item.id}`}>
                    {item.id}- {item.todo}- {item.completed?'true':'false'} <br />
                
                </Link>)):(<p>No todo available</p>)}
            </div>
        </div>
        </>
    )
}
export default TodoList;
