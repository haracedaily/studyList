import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header({aa,bb}){
  return <>
  <h1>Header</h1>
  <p>aa={aa}</p>
  <p>bb={bb}</p>
  </>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header aa={10} bb={20}/>
      <Header aa={10} bb={20}/>
      <Header aa={10} bb={20}/>
      <div>
        <h1>PMH</h1>
      </div>
    </>
  )
}

export default App
