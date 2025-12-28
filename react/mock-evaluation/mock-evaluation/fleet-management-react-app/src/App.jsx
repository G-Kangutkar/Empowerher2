
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  

  return (
    <>
      
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/admin' element={ <ProtectedRoute><Admin/></ProtectedRoute>}/>
          </Routes>
        
        
        </BrowserRouter>
    </>
  )
}

export default App
