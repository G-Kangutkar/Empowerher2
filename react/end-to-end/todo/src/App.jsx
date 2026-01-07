
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './pages/auth/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Todos from './todo/todos'


function App() {
  

  return (
    <>
      <BrowserRouter>
          
                <div className='min-h-screen'>
                  <Routes>
                  <Route path='/' element={<Login/>}/>
                  <Route path='/signup' element={<Signup/>}/>
                  <Route path='/todos' element={<Todos/>}/>
                </Routes>
                </div>
              

            <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
