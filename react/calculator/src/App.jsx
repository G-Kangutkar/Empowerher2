import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Calculator</h3>
      <Calculator/>
    </>
  )
}

export default App
