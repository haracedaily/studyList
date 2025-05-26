import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";
import dbusers from "./users.json";
import AirComponent from "./components/AirComponent.jsx";
function App() {
    // const [users,setUsers]=useState([{"id":"홍길동","password":"1234"}]);
    const [users,setUsers]=useState(dbusers);
    const [supaUser,setSupaUser]=useState(null);
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const [canInstall, setCanInstall] = useState(true)

    useEffect(() => {
        console.log(canInstall);
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setCanInstall(true);
        console.log(canInstall);
        console.log("???");
        })
    }, []);
const getUsers = async (e) =>{
    // const result = await axios.get("http://localhost:8080/");
    const result = await axios.get(import.meta.env.VITE_BACK_URL);
    const {data, status} = result;
    console.log(result);
    console.log(data);
    console.log(status);
    setUsers(data);
}
const getSupaUsers = async(e)=>{
    const result = await axios.get(import.meta.env.VITE_BACK_URL+"supausers");
    console.log(result);
    if(result.status==200){
        // setUsers(result.data);
        setSupaUser(result.data);
    };
}
    const handleInstallClick = async () => {
    console.log('handleInstallClick');
        if (deferredPrompt) {
            deferredPrompt.prompt()
            const { outcome } = await deferredPrompt.userChoice
            console.log('User choice:', outcome)
            setDeferredPrompt(null)
            setCanInstall(false)
        }
    }
  return (
    <>

        <AirComponent/>
        <div>
            {canInstall && (
                <button onClick={handleInstallClick}>앱 설치하기</button>
            )}
      <div className={'text-3xl bg-amber-50'}>안녕</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" onClick={(event)=>{
            getUsers(event);
        }}>mariadb 불러오기</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" onClick={(event)=>{
            getSupaUsers(event);
        }}>supadb 불러오기</button>
        {users && users.map((user,index)=>
            (
                <div className={"flex flex-col gap-1 border-r-4 border-2 border-amber-300 mt-2"} key={index}>
                    <h4>
                    ID : {user.id}
                    </h4>
                    <h4>
                        PW : {user.password}
                    </h4>
                    {user.name&& (<h4>NM : {user.name}</h4>)}
                </div>
                    )
        )}
        {supaUser && supaUser.map((user,index)=>
            (
                <div className={"flex flex-col gap-1 border-r-4 border-2 border-cyan-300 mt-2"} key={index}>
                    <h4>
                    ID : {user.id}
                    </h4>
                    <h4>
                        PW : {user.password}
                    </h4>
                    {user.name&& (<h4>NM : {user.name}</h4>)}
                </div>
                    )
        )}
        </div>
    </>
  )
}

export default App
