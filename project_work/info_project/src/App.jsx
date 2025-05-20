import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from "./components/Person.jsx";
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";

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
useKakaoLoader({
    appkey:"aecbd78ad9c8c047275d66c3905ad492"
});
  return (
    <>
        <Map center={{lat:33.5564, lng:126.7981}} style={{width:"100%",height:"500px"}} level={3} >
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{color:"#000"}}>Hello World!</div>
            </MapMarker>

        </Map>
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
