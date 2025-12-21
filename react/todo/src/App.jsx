
import './App.css'
import { TodoProvider } from './TodoContext'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

function App() {
  

  return (
    <>
      <div>
        <TodoProvider>
          <AddTodo/>
          <TodoList/>
        </TodoProvider>
        
      </div>
      
    </>
  )
}

export default App
