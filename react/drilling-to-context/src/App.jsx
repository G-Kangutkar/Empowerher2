
import './App.css'
import AppContext from './AppContext'
import Component1 from './Component/Component1'

function App() {
  const values= {
      a : 'a',
      b :'b',
      c : 'c',
      d : 'd',
      e : 'e',
      f : 'f'
  }
 

  return (
    <>
    <AppContext.Provider value = {values}>
      <div style={{ border: '1px solid black', backgroundColor: "#6432d9ff" , margin:'3%'}} >
        <Component1 />
      </div>
      </AppContext.Provider>
      
    </>
  )
}

export default App
