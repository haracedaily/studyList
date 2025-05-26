import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {


   const API_URL = import.meta.env.VITE_API_NODE_URL;

  const [test, setTest] = useState("안녕 test")
    useEffect(() => {
        if ("serviceWorker" in navigator && "PushManager" in window) {
            console.log("sw")
            navigator.serviceWorker.ready.then((registration) => {
                console.log("sw ready");
                registration.pushManager
                    .subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: "BCRUQ5WPVsJ5r2mmTedv_VtZE6L3XMJ9ZOFWtzBAvmpKzvpe5W_LHPt5jr8-qq6TZlCXwcSFbMm0xY0cPBzsutk",
                    })
                    .then((subscription) => {
                        return fetch(`${API_URL}/subscribe`, {
                            method: "POST",
                            body: JSON.stringify(subscription),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                    })
                    .catch((error) => {
                        console.error("푸시 구독 실패:", error);
                    });
            });
        }
    }, []);
  const getRoot = async () =>{
    // const result = await axios.get("http://localhost:8080/");
    // console.log(result);
    const {data,error} = await axios.get(`${API_URL}`);
    console.log(data);
    console.log(error);
    setTest(data);
  }
  //useEffect 화면 렌더링 전부 끝난 후 실행
  return (
    <>
        <h1>Hello React</h1>
        <p id={"aa"}>Hello React + {test}</p>
      <button onClick={getRoot}>백엔드 요청</button>
      <button onClick={()=>{
        console.log("get root");
      }}>백엔드 요청</button>
    </>
  )
}

export default App
