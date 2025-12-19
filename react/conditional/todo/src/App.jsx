import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';

function App() {
  const [displayTodo, setdisplayTodo] = useState(true);
  const mounting=()=>{
    setdisplayTodo(!displayTodo)
  }

  return (
    <>
       <div>
        <h3>To Do List: </h3>
        <button onClick={mounting} >
          {displayTodo ? "Unmount" :"Mount"}
        </button>
       </div>
       {displayTodo ? (<TodoList/>):( <div>"Todo list unmounted"</div>)}
    </>
  )
}

export default App
