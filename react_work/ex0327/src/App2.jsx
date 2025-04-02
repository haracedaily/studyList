import React, { useState } from 'react'
import DD from './components/DD'

export default function App1() {
    const [count, setCount]=useState(0);
    const style={
        border:'1px solid rgb(150,130,200)',
        borderRadius:'20px',
        padding:'30px',
        color:'rgb(30,30,30)',
        backgroundColor:'rgb(200,200,100)'
    }
    console.log('App2 렌더링됨');

    //ctrl+d 같은 문자 선택
    //ctrl +e 다른 파일로 변경
  return (
<>
<button onClick={()=>{setCount(count+1)}}>렌더링</button>
<div>
    <h1>App1</h1>
</div>

<DD stl={style}>
    <h1>자식태그1111</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laudantium nobis! Deleniti atque eveniet aperiam repudiandae magnam, vel rerum explicabo quidem porro cumque dolorum rem, velit at quisquam dolore? Eveniet?</p>
</DD>
<DD stl={style}>
    <h1>자식태그2222</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laudantium nobis! Deleniti atque eveniet aperiam repudiandae magnam, vel rerum explicabo quidem porro cumque dolorum rem, velit at quisquam dolore? Eveniet?</p>
</DD>
<DD stl={style}>
    <h1>자식태그2222</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laudantium nobis! Deleniti atque eveniet aperiam repudiandae magnam, vel rerum explicabo quidem porro cumque dolorum rem, velit at quisquam dolore? Eveniet?</p>
</DD>
</>
  )
}
