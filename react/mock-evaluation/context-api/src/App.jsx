import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import { PostProvider } from './PostContext'
import Display from './Display'

function App() {
  

  return (
    <>
      
       <Home/>
       <PostProvider>
        <Display/>
       </PostProvider>
      
      
      
     
    </>
  )
}

export default App
