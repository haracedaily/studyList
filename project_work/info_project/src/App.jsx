import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from "./components/Person.jsx";

function App() {
const [person, setPerson] = useState();
const [test,setTest] = useState(null);
const print = "hello print";
const mouseOver = () => {
    console.log("마우스 들어옴");
    setTest({});
}
const mouseOut= () => {
    console.log("마우스 나감");
    setTest(null);
}
  return (
    <>
        {test &&
        <>
            <Person name={"홍길동"} age={30} position={"right"}/>
            <Person name={"홍길동"} age={30} position={"bottom"}/>
        </>
        }
        <div style={{position:"absolute",zIndex:100,backgroundColor:"#fff"}}>
        {test && print }
        </div>
        <h1>대중교통정보서비스</h1>
        <div style={{cursor:'pointer'}} onMouseOver={mouseOver} onMouseOut={mouseOut}>
            여기에 마우스 올리면 이벤트 작동
        </div>
    </>
  )
}

export default App
