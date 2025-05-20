const express = require("express");
const pool = require("./db.js");
const path = require("path");

const morgan = require("morgan"); // (req,res,next=>{}) 미들웨어
//morgan도 미들웨어와 동일한 모양으로 exports
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();


/*morgan => log 기록, 클라이언트 측
* express.json() 프론트에서 보낸 json 파일 처리
* express.urlencoded => 파라미터 처리
* cookieParser => 쿠키 보냄
* session => 쿠키세션 (주로 로그인 처리)
* */

// app.set("port", 3000);


//morgan의 미들웨어 사용(등록)
app.use(morgan("dev"));
//combined,common,short,tiny 등의 인수 사용=>개발환경:dev 배포환경:combined
/*dev의 경우 시간, 메서드, path 결과값
* combined의 경우 header정보들*/


//정적 미들웨어 선언, 미들웨어 모양으로 온다
// 정적 파일들을 제공 해주는데 있으면 next를 내부적으로 호출
// 없으면 next를 호출하지 않음.
app.use("/",express.static(path.join(__dirname,"./public")));
// console.log(express.static(path.join(__dirname,"./public")).toString());


//익스프레스 4.17.0버전부터 body-parser에 기본으로 내장 되어있다.
//익스프레스는 json,url-encoded,raw,text형식의 데이터를 해석 가능.
//extended false는 노드 querystring으로 쿼리스트링 해석, true면 qs모듈로 쿼리스트링 해석
//body-parser사용 시 req.on("data")등의 방식으로 해석 할 필요 없다.
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use((req,res,next) => {
    console.log(req.url);
    console.log("모든 요청이 들렸다가 진행");
    next();
})
app.get("/", async (req, res,next) => {
    const conn = await pool.getConnection();
    const result = await conn.execute("SELECT * FROM users");
    conn.release();
    // console.log(req.body);
    // console.log(typeof req.body.age);
    // console.log(req.query);
    // console.log(req.query.name);
    // console.log(req.query.age);
    next();
    /*res.json,send etc.. 끝난다*/
    console.log(result);
    res.json(result[0]);
    // res.send(result[0]);
    console.log("돌아오나");
    //res.send => 문자열 , res.json => object, res.sendFile => 파일
    //app.use(err,res,res,next) => 미들웨어 처리
},(req,res,next)=>{
    console.log("넘어오나");
    next();
});
app.post('/',async (req,res)=>{
    const conn = await pool.getConnection();
    // const result = await conn.execute("INSERT INTO users SET ?",req.body);
    const result = await conn.execute("INSERT INTO users(id,password) values(?,?)",[req.body.id,req.body.password]);
    // const result = await conn.execute(`INSERT INTO users(id,password) values("${req.body.id}","${req.body.password}")`);
    console.log(req.body);
    conn.release();
    console.log(result);
    console.log("hi");
    res.send("hello post");
});
app.put('/',(req,res)=>{
    res.send("hello put");
});
app.delete('/',(req,res)=>{
    throw new Error("강제 에러 발생");
    res.send("hello delete");
})

app.get("/html", (req, res) => {
    console.log(path.join(__dirname,"./index.html"));
    // res.sendFile("./index.html"); 절대 경로로 지정해줘라
    res.sendFile(path.join(__dirname,"./index.html"));
})

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send('에러가 발생하였습니다.');
})

app.listen(8080, () => {
    console.log("server is running on port 8080");
})
// app.listen(app.get("port"), () => { 포트 두개 연동 가능
//     console.log("server is running on port 3000");
//     console.log('is it possible?');
// })
