import { useEffect, useState } from 'react'
import './App.css'
import { createClient } from "@supabase/supabase-js";

 
// 훅 종류 : useState useEffect useRef useMemo useCallback
// useEffect 초기 렌더링 할때 꼭 필요할때 한번 사용함
// useState 값이 변경될 시에 화면에 재렌더링
const url = 'https://zgrjjnifqoactpuqolao.supabase.co';
const pwd = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncmpqbmlmcW9hY3RwdXFvbGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDc0NTgsImV4cCI6MjA1NjgyMzQ1OH0._Vl-6CRKdMjeDRyNoxlfect7sgusZ7L0N5OYu0a5hT0';
const supabase = createClient(url, pwd); 
function App() {
  

  const [count, setCount] = useState(0)
  const [pages,setPages] = useState([1,2,3]);
const [data,setData]=useState([ { review_num: 1, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "홍길동", title: "제목1", review_txt: "리뷰입니다11." },
  { review_num: 2, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "박길동", title: "제목2", review_txt: "리뷰입니다22." },
  { review_num: 3, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "이길동", title: "제목3", review_txt: "리뷰입니다33." }
]);

//맨처음에 한번만 콜백함수 호출
useEffect(()=>{
  (async function(){
    const total = (await supabase.from('review').select()).data.length;
    let totalPage = Math.ceil(total/5);
    let temp = Array.from({length:totalPage},(_,i)=> i+1);
    console.log(temp);
    let pages=[];
    for(let i=1;i<=totalPage;i++){
      pages.push(i);
    };
    console.log(pages);
    setPages(pages);
  })();
  const params = new URLSearchParams(location.search);
const pageNum = params.get('pageNum') ?? "1";
console.log('pageNum = '+pageNum);
const [from, to] = [(parseInt(pageNum)-1)*5,(parseInt(pageNum)*5)-1];
(async function(){
  let res;
   res = await supabase.from('review').select().range(from,to);
  
  setData(res.data);
})();
},[]);



const getReview = async () => {

  const res = await supabase.from('review').select();
 setData(res.data);
  console.log(res);
}
// const retData = data.map(el=>`<li>${el}</li>`);
  console.log('App rendering');
  return (
    <>
    <div style={{display:'flex',gap:2}}>
      {pages.map(el=>(
        <a key={el} href={`?pageNum=${el}`}>{el}</a>
      ))}
    </div>
  <h1>count = {count}</h1>
  <button onClick={()=>setCount(count+1)}>count증가</button>
  {data.map(el=>(<div key={el.review_num}>
    <h2>게시글 : {el.title}</h2>
    <div>{el.review_txt}</div>
    <div>작성자 {el.name}</div>
  </div>))}
  <button onClick={getReview}>review데이터 가져오기</button>
    </>
  )
}

export default App
