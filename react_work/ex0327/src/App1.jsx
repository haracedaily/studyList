import React, { useState } from 'react'
import CC from './components/CC'

export default function App1() {
    const [style,setStyle]=useState({
        border:'1px solid rgb(150,130,200)',
        borderRadius:'20px',
        padding:'30px',
        color:'rgb(30,30,30)',
        backgroundColor:'rgb(200,200,100)'
    })
  return (
<>
<div>
    <h1>App1</h1>
</div>
<button onClick={()=>{setStyle({...style,color:'blue'})}}>파란색으로</button>
<button onClick={()=>{setStyle({...style,color:'red'})}}>빨강색으로</button>
<button onClick={()=>{setStyle({...style,color:'white'})}}>하얀색으로</button>
<CC style={style}>
    <h1>자식태그1111</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laudantium nobis! Deleniti atque eveniet aperiam repudiandae magnam, vel rerum explicabo quidem porro cumque dolorum rem, velit at quisquam dolore? Eveniet?</p>
</CC>
<CC style={style}>
    <h1>자식태그2222</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laudantium nobis! Deleniti atque eveniet aperiam repudiandae magnam, vel rerum explicabo quidem porro cumque dolorum rem, velit at quisquam dolore? Eveniet?</p>
</CC>
<CC style={style}>
    <h1>자식태그2222</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laudantium nobis! Deleniti atque eveniet aperiam repudiandae magnam, vel rerum explicabo quidem porro cumque dolorum rem, velit at quisquam dolore? Eveniet?</p>
</CC>
</>
  )
}
