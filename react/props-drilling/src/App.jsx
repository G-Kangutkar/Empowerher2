
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
      <div style={{ border: '1px solid black', backgroundColor: "#6432d9ff" }} >
        <Component1 a={a} b={b} c={c} d= {d} e={e} f={f}/>
      </div>
      
    </>
  )
}

export default App
