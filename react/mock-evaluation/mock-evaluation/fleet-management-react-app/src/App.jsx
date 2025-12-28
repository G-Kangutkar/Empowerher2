
import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  

  return (
    <>
      
        <BrowserRouter>
          <Router>

            <Route path='/' element={<Login/>}/>
            <Route path='/admin' element={ <ProtectedRoute><Admin/></ProtectedRoute>}/>
          </Router>
        
        
        </BrowserRouter>
    </>
  )
}

export default App
