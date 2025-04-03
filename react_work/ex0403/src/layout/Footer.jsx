import React, { useState } from 'react'

export default function Footer() {
    const [count,setCount] = useState(0)
  return (
    <>
    <div>count = {count}</div>
    <button onClick={()=>{setCount(count+1)}}>count</button>
    <div style={{display:'flex',gap:'1',justifyContent:"center"}}>
        Footer
    </div>
    </>
  )
}
