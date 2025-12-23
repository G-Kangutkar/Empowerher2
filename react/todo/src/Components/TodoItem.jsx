import { useContext } from "react";

import TodoContext from "../Todos";

function TodoItem({todo}){

    const {deleteTodo, toggleTodo} = useContext(TodoContext)
    return(
        <div>
            <ul>
                <li>
                    <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)} />
                    <span style={{textDecoration: todo.completed ? 'line-through':"none"}}>{todo.title}</span>
                    <button onClick={()=>deleteTodo(todo.id)}> Delete</button>

                </li>
            </ul>
        </div>
    )
}
export default TodoItem;