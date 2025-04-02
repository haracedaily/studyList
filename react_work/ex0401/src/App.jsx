import { useEffect, useRef, useState } from 'react'
import './App.css'
import Calcu from '@/components/Calcu.jsx'

function App() {
  let a =10; // 10으로 초기화
  const useA = useRef(10); //메모리상에 참조되는 값이 있는 경우 참조형태로 사용

  const [count,setCount] = useState(0);
  const inputRef = useRef(null);

  const handleClick = ()=>{
    inputRef.current.focus();
  }
  useEffect(()=>{
    console.log("useEffect 호출");
    handleClick();
  })

  return (
    <>
    <Calcu></Calcu>
    <h1>count = {count}</h1>
    <h1> a={a}</h1>
    <h1>useA = {useA.current}</h1>
    <button onClick={()=>{
      setCount(count+1);
    }}>count 증가</button>
    <button onClick={()=>{
      a=a+1;
      console.log(a);
      useA.current = useA.current +1;
      console.log(useA);
    }}>a useA 증가</button>
     <input type="text" name='' id='' ref={inputRef} />
     <button onClick={handleClick}>버튼</button>
    </>
  )
}

export default App
