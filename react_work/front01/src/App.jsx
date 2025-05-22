import { useState } from 'react'
import './App.css'
import axios from "axios";
import dbusers from "./users.json";
function App() {
    // const [users,setUsers]=useState([{"id":"홍길동","password":"1234"}]);
    const [users,setUsers]=useState(dbusers);
const getUsers = async (e) =>{
    // const result = await axios.get("http://localhost:8080/");
    const result = await axios.get("https://port-0-studylist-managdgo41797b84.sel4.cloudtype.app/");
    const {data, status} = result;
    console.log(result);
    console.log(data);
    console.log(status);
    setUsers(data);
}
  return (
    <>
        <div>
      <div className={'text-3xl bg-amber-50'}>ddd</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" onClick={(event)=>{
            getUsers(event);
        }}>불러오기</button>
        {users && users.map((user,index)=>
            (
                <div className={"flex flex-col gap-1 border-r-4 border-2 border-amber-300 mt-2"} key={index}>
                    <h4>
                    ID : {user.id}
                    </h4>
                    <h4>
                        PW : {user.password}
                    </h4>
                </div>
                    )
        )}
        </div>
    </>
  )
}

export default App
