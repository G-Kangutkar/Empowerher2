import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './pages/TodoList'
import TodoDetails from './pages/TodoDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<TodoList/>}/>
          <Route path='/todos/:id' element={<TodoDetails/>}/>
         </Routes>
        
        </BrowserRouter>
       
        
      </div>
      
    </>
  )
}

export default App
