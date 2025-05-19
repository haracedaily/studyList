const http  = require("http");
const fs = require("fs");
const {pool} = require('./db');


http.createServer(async (req,res)=>{
try{
    if(req.url==='/'){
        const password = "비밀";
        const indexHtml = await fs.promises.readFile("./index.html");
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        return res.end(indexHtml);
}else if(req.url==='/join' && req.method==="POST"){
    req.setEncoding('utf-8');
    let body = '';

    //이벤트는 비동기 실행
        req.on('data', (data)=>{
            body += data;

        //     이벤트 방식
        })
        req.on('end', async() => {

            console.log(body);
            const{id,password} = JSON.parse(body);
            console.log(id,password);

            const conn = await pool.getConnection();
            const sql = `insert into users (id,password) values(?, ?)`;
            const [result] = await conn.execute(sql,[id,password]);
            conn.release();

            console.log('결과');
            console.log(result);
            if(!result.warningStatus){
                const obj = JSON.parse(body);
                res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
                return res.end(JSON.stringify(obj));
            }
        })
        //req 이벤트와 무관하게 우선 작동함
    // console.log(body);
    // const obj = {name:"홍길동",age:20};
    // res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
    // res.end(JSON.stringify(obj));
        //일단 리턴 시키고 이벤트에서 실행 될때 값에 따라 결과 전송
        return
}
    else if(req.url.includes('/select')){
        const conn = await pool.getConnection();
        const sql = `select * from users`;
        const rows = await conn.execute(sql);
        conn.release;
        console.log(rows);
        res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
        return res.end(JSON.stringify(rows[0]));
    }
    else if(req.url === '/login'){
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    return res.end('로그인 성공');
}

    //위에 동기로 동작하는 조건절에서 return 되지 않으면 동작. 즉, 조건절에서 return 시켜야함
    res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});
    res.end('잘못된 경로입니다.');

/*
        fs에 promises사용
        fs.readFileSync("./index.html",'utf-8',(err,data)=>{
        if(err)throw err;
        return data;
    });*/

    }catch (error) {
    console.log('error');
    console.log(error);
        res.writeHead(505,{'Content-Type':'text/plain; charset=utf-8'});
        res.end(error.message);
    }
}).listen(8080,'0.0.0.0',()=>{
    /*0.0.0.0은 어떠한 경로에도 8080포트를 사용하면 허용*/
    console.log("listening to port 8080");
})