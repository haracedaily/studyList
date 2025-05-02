const http = require("http");
require('dotenv').config(); 
// env안에 있는 변수를 가져와서 process.env 객체 프로퍼티 추가

console.log('env');
console.log(process.env.PWD); //현재 작업중인 디렉토리, 기본제공
console.log(process.env.password);//dotenv config()함수 호출해야 추가됨

http.createServer((req,res)=> {
    console.log('암호화 password');
    console.log(req.url);
    console.log(req.headers.cookie);
    console.log(req.headers);

    try{
        asdfg;//err
    }catch(e){
        console.log(e);
    }

    res.end("<html><head></head><body>1234</body></html>");
}).listen(8005, ()=>{
    console.log('8005포트로 실행되었습니다.');
})



/* 이벤트 루프
호출스택
백그라운드
큐

블로킹 = 동기
논블로킹 = 비동기

node도 스레드를 여러개 생성하지만 직접 제어할 수 있는 
스레드는 단일이라 싱글스레드라고 표현한다.

worker_thread 라이브러리 사용해 멀티스레드'처럼' 사용할 수는 있다.
 */