import './App.css'
import Header from "./layout/Header.jsx";
import Home from "./pages/Home.jsx";
import Lotto from "./pages/Lotto.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {


  return (
    <>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Lotto" element={<Lotto/>} />
            </Routes>
    </>
  )
}

export default App
