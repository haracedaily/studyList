import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
      axios.defaults.withCredentials= true; // 쿠키를 포함하여 요청을 보냄

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user,setUser] = useState(null);
  useEffect(() => {
      axios
          .get('http://localhost:4003/api/me')
          .then(res => {
            console.log('me = ', res);
                setLoginStatus(res?.data.status);
                setUser(res?.data.user);
          })
          .catch(e => console.log(e));
  },[])
    const reqLogin = async () => {
      try{
        const result = await axios.post('http://localhost:4003/api/login',{id:'admin',password:'admin!!!!'});
        console.log('return 값 = ', result);
        setLoginStatus(true);
        setUser(result.data.data[0]);
      }catch(e){
        console.log('error = ', e);
      }
    }

    const reqMe = async () => {
        try{
            const result = await axios.get('http://localhost:4003/api/me');
            console.log('return 값 = ', result);
        }catch(e){
            console.log('error = ', e);
        }
    }

    const reqLogout = async () => {
     axios.post('http://localhost:4003/api/logout').then(() => {
       setLoginStatus(false);
       setUser(null);
     }).catch(e => console.log(e));
    }
    const reqKakaoLogin = async () => {
        window.location.href= 'http://localhost:4003/api/kakaoLogin';
    }
  return (
    <>
      {loginStatus ? (<>
            <h1>로그인 성공</h1>
            <h2>아이디: {user?.id}</h2>
            <h2>이름: {user?.nm}</h2>
            <h2>권한: {user?.auth}</h2>
            <h2>주소: {user?.addr}</h2>
        <button onClick={reqLogout}>로그아웃</button>
          </>
            )
        : (<>
                  <div>

                <button onClick={reqLogin}>로그인</button>
                  </div>
                  <div>

              <button onClick={reqKakaoLogin}>카카오 로그인</button>
                  </div>
          </>
      )
      }
      <button onClick={reqMe}>로그인 상태확인</button>
    </>
  )
}

export default App
