import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {


   const API_URL = import.meta.env.VITE_API_NODE_URL;

  const [test, setTest] = useState("안녕 test")
    useEffect(() => {
        if (Notification.permission === 'granted') {
            console.log('알림이 이미 허용되었습니다.');
            if ("serviceWorker" in navigator && "PushManager" in window) {
                console.log("sw")
                navigator.serviceWorker.ready.then((registration) => {
                    console.log("sw ready");
                    registration.pushManager
                        .subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: "BNgqWyxPFLcg-5Z95bQvQoNsymYpYx1VOcca7LRC93671ybRS58GAVd4ESfk1iNEq2pZ56QtZVb0zzW1eCMsTa4",
                        })
                        .then((subscription) => {
                            console.log("푸시 구독 성공:", subscription);
                            return fetch(`${API_URL}/subscribe`, {
                                method: "POST",
                                body: JSON.stringify(subscription),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }).then((response) => console.log(response)).catch((error) => console.error(error));
                        })
                        .catch((error) => {
                            console.error("푸시 구독 실패:", error);
                        });
                });
            }

        }
        // 알림 권한을 요청
     /*   Notification.requestPermission().then(function(permission) {
            console.log("권한 값",permission);
            if (permission === 'granted') {
                console.log('알림이 허용되었습니다.');
            } else {
                console.log('알림이 거부되었습니다.');
            }
        }).catch(function(error) {
            console.error('알림 권한 요청 중 오류 발생:', error);
        });*/

    }, []);
  const handleNotification = () => {
      // 알림 권한을 요청
      Notification.requestPermission().then(function(permission) {
          console.log("권한 값",permission);
          if (permission === 'granted') {
              console.log('알림이 허용되었습니다.');
          } else {
              console.log('알림이 거부되었습니다.');
          }
      }).catch(function(error) {
          console.error('알림 권한 요청 중 오류 발생:', error);
      });
    /*if (Notification.permission === 'granted') {
        const notification = new Notification('알림 제목', {
            body: '알림 내용',
            icon: '/icons/icon.svg' // 알림 아이콘
        });

        notification.onclick = function(event) {
            event.preventDefault(); // 기본 동작 방지
            window.open('https://example.com'); // 클릭 시 이동할 URL
        };
    } else {
        console.log('알림 권한이 허용되지 않았습니다.');
    }*/
  }
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
        <button onClick={()=>{handleNotification()}}>권한 요청</button>
    </>
  )
}

export default App
