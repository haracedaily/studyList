import { useState } from 'react'
import './App.css'
import Aa from "./components/Aa.jsx";
function App() {
    const [style, setStyle] = useState("ON")
    const [showAA, setShowAA] = useState(true);
    return (
        <>

            { style === "ON" ?
                (<h1 style={{backgroundColor : 'rgb(100,200,100)'}}>on = {style}</h1>):(<h1 style={{backgroundColor:'rgb(200,100,100)'}}>off = {style}</h1>)}
            <div>

            <button onClick={() => setStyle(style==="ON"?"OFF":"ON")}>Toggle</button>
                <button onClick={()=>{}}>멈춤</button>
            <button onClick={()=>{setShowAA(!showAA)}}>Aa btn</button>
            </div>

            {showAA &&<Aa/>}

        </>
    )
}

export default App