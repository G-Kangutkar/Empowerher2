
import './App.css'

import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import { TodoProvider } from './Todos'

function App() {
  

  return (
    <>
      <div>

        <TodoProvider>
          <AddTodo/>
          <TodoList/>
        </TodoProvider>
        {/* <TodoProvider>
          <AddTodo/>
          <TodoList/>
        </TodoProvider> */}
        
      </div>
      
    </>
  )
}

export default App
