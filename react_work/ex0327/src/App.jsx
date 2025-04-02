import { useEffect, useState } from 'react'
import './App.css'
import AA from './components/AA';


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('홍길동');

  // 초기 렌더링 시 1회 호출
  useEffect(()=>{
    setCount(+localStorage.getItem('count'))
    console.log("useEffect 호출됨");
  }, [count, name]);
//useEffect 뒤에는 의존성 배열을 넣는다, 해당 배열의 내용 변경 시 1회 호출 됨

  function addCount(){
    setCount(count+1);
    localStorage.setItem('count',count+1);
  }

  function subCount(){
    if(count>0){
    setCount(count-1);
    localStorage.setItem('count',count-1);
    }
  }

  function changeName(){
    setName(name+'!');
  }

  return (
    <>
    <AA aa='10' bb={20}></AA>
      <h1>count = {count}</h1>
      <button onClick={addCount}>count증가</button>
      <button onClick={subCount}>count감소</button>
      <h1>name = {name}</h1>
      <button onClick={changeName}>이름변경</button>
    </>
  )
}

export default App
