const http=require("http");
//node에서만 사용 가능 브라우저에서 사용 불가

const server = http.createServer((req,res)=>{
    
    res.end('hello,world');
})

server.listen(8005,()=>{
    console.log('8005로 실행되었습니다.')
})