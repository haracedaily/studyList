import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { signUp, supabase } from '../jslib/supa';
import Swal from 'sweetalert2'

function User() {
    const {userId} = useParams();
    console.log(userId);
    // useEffect(()=>{
    //     supabase.auth.
    // },[])

    const sign = ()=>{
        let {data,error}=signUp('nj7001@naver.com','123456');
        console.log(data);
        console.log(error);
        Swal.fire({
            title:`${JSON.stringify(data)}`,
            text:`${JSON.stringify(error)}`,
            icon:'success',
            confrimButtonText:'cool'
        })
    }
   
  return (
    <>
  <div>User</div>
  <button onClick={sign}>회원가입</button>
    </>
  )
}

export default User