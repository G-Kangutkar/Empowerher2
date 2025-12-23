import { useState, useContext } from "react";

import TodoContext from "../Todos";

function AddTodo(){
    const [title, setText]=useState('');
    const {addTodo} = useContext(TodoContext);
    const handleTodo=()=>{
        addTodo(title);
        setText('');
    }
    return(
        <>
        <input type="text" placeholder="Enter Task" value={title} onChange ={(e)=>setText(e.target.value)}/>
        <button onClick={handleTodo}>Add</button>
        </>
    )

}
export default AddTodo;