
import { useState } from "react";
import { createContext } from "react";

const TodoContext =createContext();
export function TodoProvider({children}){
    const [todos, setTodos]=useState([]);
    
    const addTodo=(title)=>{
        setTodos([...todos,{id:Date.now(), title, completed:false}])
    }
    const toggleTodo=(id)=>{
        setTodos(todos.map(todo=>todo.id === id ?{...todo, completed:true}:todo))
    }

    const deleteTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id !== id))
    }
    const values={
        todos,
        addTodo,
        deleteTodo,
        toggleTodo
    }

    return(
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )

}
export default TodoContext;