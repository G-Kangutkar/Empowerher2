import { useState } from 'react'

import './App.css'

function App() {
  const [ischange, setChange] = useState(true);
  const buttonColor = ischange?"red":"blue" ;
  const toChange=()=>{
    setChange(!ischange)
  }

  return (
    <>
    <div> <h3>Change Color</h3></div> 
    <button onClick={toChange} style={{backgroundColor:buttonColor, color:"white", padding:'15px'}}>Click</button>
      
    </>
  )
}

export default App
