import { useState, useContext } from "react";
import TodoContext from "../TodoContext";

function AddTodo(){
    const [text, setText]=useState('');
    const {addTodo} = useContext(TodoContext);
    const handleTodo=()=>{
        addTodo(text);
        setText('');
    }
    return(
        <>
        <input type="text" placeholder="Enter Task" value={text} onChange ={(e)=>setText(e.target.value)}/>
        <button onClick={handleTodo}>Add</button>
        </>
    )

}
export default AddTodo;