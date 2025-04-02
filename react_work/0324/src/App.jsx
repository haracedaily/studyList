import { useState } from 'react'
import './App.css'
import BB from './BB'

function CC(){
    return (
        <div><h1>CC</h1></div>
    )
}

function App() {
  const [aa,setAA] = useState('useStateAA');
  const [bb, setBB] = useState('useStateBB');
  const doClick = () => setAA(aa+'!');
//함수형 컴포넌트
  return (
    <>
        <CC></CC>
        <CC></CC>
        <CC></CC>
        <BB />
<BB/>
        <BB/>
        <BB/>
      <h1 className='title'>안녕{aa}</h1>
        <button onClick={doClick}>버튼</button>
        <h2 id='aa'>안녕{bb}</h2>
        <button onClick={()=>setBB('dfdfdfdfdf')}>btn</button>
    </>
  )
}
export default App
