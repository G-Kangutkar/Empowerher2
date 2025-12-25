import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiForm from './Components/MultiForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MultiForm/>
      </div>
    </>
  )
}

export default App
