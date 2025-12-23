import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Todos from './Todos'
import Navbar from './Navbar'
import NotFound from './Pages/NotFound'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/> 
      <Route path="/todos" element={<Todos/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
