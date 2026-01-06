import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PictureSlide from './components/PictureSlide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <PictureSlide/>
    </>
  )
}

export default App
