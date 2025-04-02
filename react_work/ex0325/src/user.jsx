import { useState } from "react";

useState

function User(){
    const [user,setUser] = useState({name:'홍길동',age:20});
    function modiUser(){
        user.age++;
        setUser({...user});
    }
    return (
        <>
        <h1>유저</h1>
        <h1>name = {user.name}</h1>
        <h1>age = {user.age}</h1>
        <button onClick={modiUser}>나이</button>
        </>
    );
}

export default User;