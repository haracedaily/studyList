import React, { useEffect } from 'react'
import { Link,  } from 'react-router-dom'


export default function Header() {
    useEffect(()=>{
        console.log('header 열림')
    })

  return (
   <>
   <div style={{display:'flex',gap:'1rem',position:'sticky',top:'0', padding:'0',margin:'0'}}>
        <Link to={'/'}>
        <h2>Home</h2>
        </Link>
        <Link to={'Contact'}>
        <h2>Contact</h2>
        </Link>
        <Link to={'About'}>
        <h2>About</h2>
        </Link>
        <Link to={'/user/33d49fbf-490c-4a33-9c3e-55aa7751ef65'}>
        <h2>MyPage</h2>
        </Link>
    </div> 
   </>
  )
}
