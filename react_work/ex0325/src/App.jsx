import { useState } from 'react'
import './App.css'
import User from './user';
import TextInput from './TextInput';

function doA(item){
  return [item,function(a){item=a;}];
}
//prettier 세미콜론 저장때 자동으로 넣어줌
function App() {
  const [a,setA] = doA(10);
  //useState를 사용했기 때문에 setcount로 값 변경시 화면 재 렌더링(trigger)
//hook
  const [count, setCount] = useState(0);
  const [myStyle,setStyle]=useState({border:'1px solid black',background:'#456174'});
  //일반 변수이기 때문에 화면 변경이 없음
  let test = 0;
  // const $h1 = document.getElementById('test-h1');
  const func = () => {
    // $h1.innserHTML = '변경';
    // console.log($h1);
    setCount(count+1); setA(a+1); console.log(a);
    document.querySelector('body').classList.toggle('dark');
    setStyle({border:'1px solid black',background:`rgb(200,100,${count*15})`})
    if(count*15>255){
      setCount(0);
    }
  };

  return (
    <>
    <TextInput></TextInput>
<User></User>
      <h1>count = {count}</h1>    
      <h1 id="test-h1">test = {test}</h1>
      <h1>a = {a}</h1>
      <button style={myStyle} onClick={func}>누름</button>
    </>
  )
}

export default App
