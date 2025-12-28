
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import ProtectedRoute from './pages/ProtectedRoute'
 import AuthProvider from './AuthContext'
import CardProvider from './CardContext'

function App() {
  

  return (
    <>
      
        <BrowserRouter>
        <AuthProvider>
          <CardProvider>
          <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/admin' element={ <ProtectedRoute><Admin/></ProtectedRoute>}/>
          </Routes>
        </CardProvider>
        </AuthProvider>
        </BrowserRouter>
    </>
  )
}

export default App
