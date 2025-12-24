
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Todos from './pages/Todos'
import ProtectedRoute from './ProtectedRoute'
import TodoDetails from './TodoDetails'

function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/todos' element={<ProtectedRoute><Todos/></ProtectedRoute> }/>
      <Route path='/todos/:todoId' element={<ProtectedRoute><TodoDetails/></ProtectedRoute>}/>

    </Routes> 
    </BrowserRouter>
      
  
  )
}

export default App
