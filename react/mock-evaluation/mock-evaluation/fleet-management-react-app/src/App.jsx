
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import ProtectedRoute from './pages/ProtectedRoute'
import AuthProvider from './AuthContext'

function App() {
  

  return (
    <>
      
        <BrowserRouter>
        <AuthProvider>
          <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/admin' element={ <ProtectedRoute><Admin/></ProtectedRoute>}/>
          </Routes>
        
        </AuthProvider>
        </BrowserRouter>
    </>
  )
}

export default App
