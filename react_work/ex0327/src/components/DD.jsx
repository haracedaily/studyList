import React, { useState } from 'react'

export default function DD({stl,children}) {
  const [style,setStyle] = useState(stl);
  console.log('DD렌더링됨');
  return (
    <>
    <button onClick={()=>{setStyle({...stl,color:'blue'})}}>파란색으로</button>
    <button onClick={()=>{setStyle({...stl,color:'red'})}}>빨강색으로</button>
    <button onClick={()=>{setStyle({...stl,color:'white'})}}>하얀색으로</button>
    <div style={style}>
    <div>DD</div>
    {children}
    </div>
    </>
  )
}
