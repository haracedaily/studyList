import { useState } from 'react'
import './App.css'
import {a,Users} from './Users.js'
import UserComponents from "./User.Components.jsx";

function App() {
    const mUsers = new Users();
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(mUsers.users)

    console.log(JSON.stringify(users));
    const addCount = () => {
      console.log(a);
      console.log('here!');
      setCount(count + 1);
    }
  return (
    <>
     <h1>count = {count}</h1>
        <button onClick={addCount}>카운트 증가</button>
        {
            users.map((user) => (
                // UserComponents({id: user.id, username: user.username, email: user.email})
                <UserComponents id={user.id} name={user.name} email={user.email} />
            ))
        }
    </>
  )
}

export default App
