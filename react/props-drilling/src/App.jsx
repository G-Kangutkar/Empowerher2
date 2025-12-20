import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './Component/Component1'

function App() {
  const a = 'a';
  const b ='b';
  const c = 'c';
  const d = 'd';
  const e = 'e';
  const f = 'f';

  return (
    <>
      <div>
        <Component1 a={a} b={b} c={c} d= {d} e={e} f={f}/>
      </div>
      
    </>
  )
}

export default App
