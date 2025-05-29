import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
const [test,setTest]=useState("test입니다");
  const login=(a)=>{
    console.log(a);
    axios.post(
        `${import.meta.env.VITE_API_URL}/login`,//전송 url 설정
        { email:"aaa@naver.com", password:"1234" },// req.body 내용 보냄
        {withCredentials:true} // 쿠키설정 허용
    ).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
  }

  const myPage=()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/mypage`,{withCredentials:true}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
  }
  const logout=()=>{
      axios.get(`${import.meta.env.VITE_API_URL}/logout`,{withCredentials:true}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
  }
  return (
    <>
        <h1>{test}</h1>
      <button onClick={login}>로그인</button>
        <button onClick={logout}>로그아웃</button>
      <button onClick={myPage}>마이페이지</button>
    </>
  )
}

export default App
