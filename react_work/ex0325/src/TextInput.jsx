import React, { useState } from 'react'

export default function TextInput() {
    const [text,setText]=useState("");
    const change = (event)=>{
        console.log(event);
        setText(event.target.value);
    }
    // function change(event){
    // }
    const amove = (event)=>{
        // 기본적으로 페이지 이동
        // 기본 동작 막을때
        event.preventDefault();
        // event 두개 걸렸으면 작동 안되게 막는것
        event.stopPropagation();
    }
    const doDiv = ()=>{
        console.log(`div 누르면 출력`);
    }
  return (
    <div onClick={doDiv}>TextInput
        <input type="text" value={text} onChange={change}/>
<a href="https://www.naver.com" onClick={amove}>이동</a>
        <div>{text}</div>
    </div>
  )
}

// class component의 경우 this를 바인딩 해서 사용해야했음
// react는 syntheticEvent를 사용하여 이벤트 관리