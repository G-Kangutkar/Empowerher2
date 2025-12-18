
import { useState } from 'react'
import './App.css'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';


function App() {
   const [isStatus, setStatus]=useState(false);

  const toggle=()=>{
    setStatus(!isStatus)
  }

  return (
    <>
      <button onClick={toggle}>Click</button>
      
      {isStatus?<ComponentA isStatus={isStatus}/>:<ComponentB isStatus={isStatus}/>}
       
    </>
  )
}

export default App
