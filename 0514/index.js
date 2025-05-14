const http  = require("http");
const fs = require("fs");




http.createServer(async (req,res)=>{
    console.log(req.url);
    try{
if(req.url==='/'){
    const password = "비밀";
    const indexHtml = await fs.promises.readFile("./index.html");

    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.end(indexHtml);
}else if(req.url === '/join'){
    const obj = {name:"홍길동",age:20};
    res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
    res.end(JSON.stringify(obj));
}else if(req.url === '/login'){
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    res.end('로그인 성공');
}
/*
        fs에 promises사용
        fs.readFileSync("./index.html",'utf-8',(err,data)=>{
        if(err)throw err;
        return data;
    });*/

    }catch (error) {
        res.writeHead(505,{'Content-Type':'text/plain; charset=utf-8'});
        res.end(error.message);
    }
}).listen(8080,'0.0.0.0',()=>{
    /*0.0.0.0은 어떠한 경로에도 8080포트를 사용하면 허용*/
    console.log("listening to port 8080");
})