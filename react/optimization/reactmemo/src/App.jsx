import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './Components/ParentComponent'
import { lazy } from 'react'
import { Suspense } from 'react'

const ChildComponent = lazy(()=>import('./Components/ChildComponent'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentComponent/>
      <Suspense fallback={<div>Loading.......</div>}>
        <ChildComponent/>
      
      </Suspense>
       
    </>
  )
}

export default App
