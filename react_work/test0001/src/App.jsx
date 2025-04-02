import { /* useEffect, */ useMemo, useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(-1);
/*   useEffect(()=>{
    setCount(+sessionStorage.getItem('count'))
  },[]) */
  const session_count = useMemo(()=>{
    if(Math.abs(localStorage.getItem('count')-count)>1){
      setCount(+localStorage.getItem('count'));
    }else{
      sessionStorage.setItem('count',count);
      localStorage.setItem('count',count);
    }
  },[count])
function ageCalc(ev){
  let today = new Date();
  let today_year = today.getFullYear();
  let today_month = today.getMonth()+1;
  let today_date = today.getDate();
  if(/[0-9]{8}$/g.test(ev.target.value)){
    if(today_month>ev.target.value.slice(4,6)){
      setAge(today_year-+ev.target.value.slice(0,4));
    }else if(today_month==ev.target.value.slice(4,6)&&today_date>=ev.target.value.slice(6)){
      setAge(today_year-+ev.target.value.slice(0,4));
    }
    else{
      setAge(today_year-1 - +ev.target.value.slice(0,4))
    }
  }else if(/[0-9]{6}$/g.test(ev.target.value)){
    if(today_month>ev.target.value.slice(2,4)){
      (today_year+'').slice(2)>=ev.target.value.slice(0,2)?setAge(today_year- +('20'+ev.target.value.slice(0,2))):setAge(today_year- +('19'+ev.target.value.slice(0,2)))
    }else if(today_month==ev.target.value.slice(2,4)&&today_date>=ev.target.value.slice(4)){
      (today_year+'').slice(2)>=ev.target.value.slice(0,2)?setAge(today_year- +('20'+ev.target.value.slice(0,2))):setAge(today_year- +('19'+ev.target.value.slice(0,2)))
    }else{
      (today_year+'').slice(2)>=ev.target.value.slice(0,2)?setAge(today_year-1- +('20'+ev.target.value.slice(0,2))):setAge(today_year-1- +('19'+ev.target.value.slice(0,2)))
    }
  }
  console.log(ev.target.value.match(/[0-9]/g));
}
  

  return (
    <>
      <h1>count = {count}</h1>
      <div>

      <button onClick={()=>{setCount(count+1)}}>증가</button>
      <button onClick={()=>{setCount(count-1)}}>감소</button>
      </div>
      <input type="text" placeholder='주민등록번호 앞자리' onChange={()=>ageCalc(event)}/>
      <div>{age>=0?'만나이 '+age+'살입니다':'계산 중'}</div>
    </>
  )
}

export default App
