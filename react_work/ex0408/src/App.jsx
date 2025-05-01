import { useState } from 'react'
import './App.css'
import Header from "./layout/Header.jsx";
import Home from "./pages/Home.jsx";
import Lotto from "./pages/Lotto.jsx";
import {Route, Routes} from "react-router-dom";
import MyPage from "./pages/MyPage.jsx";

function Test(){
    return (<><h1>Test</h1></>);
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Test/>
        <Test/>
        <Test/>
      <h1>Vite + React</h1>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={"/lotto"} element={<Lotto/>}></Route>
            <Route path={"/mypage"} element={<MyPage/>}></Route>
        </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
