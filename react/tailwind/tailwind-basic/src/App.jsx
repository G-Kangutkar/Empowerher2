import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from './Component/tailwind-basic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Basic/>
    </>
  )
}

export default App
