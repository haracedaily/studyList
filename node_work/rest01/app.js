/*nodemon 소스 수정시 서버 자동 재시작*/
/*배포 후에는 서버 코드 변경이 별로 없기 때문에 개발용으로만 사용 -D*/
// require에서 폴더명 작성 시 index.js를 가져옴
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const aa = require('./test');
console.log(aa);

app.set('port', process.env.PORT||3000);
// app.set("test","100");
console.log(app.get('port'));
const obj = {};
app.use((req, res, next) => {
    console.log("들렸다가 갑니다.");
    next();
})

app.get('/', (req, res, next) => {
    // console.log(app.get('test'));
    req.test = "aaaatest";
    obj.aa = "aa 변수입니다.";
    next();
    // res.send('hello world');
    //html응답을 하고 싶으면 res.sendFile로 보냄, 단 파일 경로는 path 모듈 사용해야함

},(req,res)=>{
    console.log(obj);
    console.log(req.query);
    console.log(req.test);
    console.log(req.method);
    // res.send("hello get");
    throw new Error("미들웨어에서 에러처리");
})

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).json({"error":"에러가 강제로 발생하였습니다."})

})

app.get('/html', (req, res) => {
    console.log(__dirname);
    //현재 경로에서 html 폴더 밑에 index.html 보내기
    res.sendFile(__dirname + '/html/index.html');
})
app.get('/img', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname , './img/aa.png'));
})
app.get('/select', (req, res) => {
    res.send("hello select");
})
app.post('/', (req, res) => {
    console.log(obj);
    res.send("hello post");
})

app.listen(app.get('port'), () => {

    console.log('server is running on port');
})

//set,get,use 사용을 제일 많이 함

/*
*
* pwa는 https에서만 작동함
* vercel cloudtype 서버는 https 자동으로 만들어 줌
* 로컬에서는 pwa 동작 안함, http이기 때문에
*
* 미들웨어 설정하기
* app.use()
* 미들웨어 req,res,next
* 에러미들웨어 err,req,res,next
* restFul api
* app.get,post,patch,put,delete
* res 요청객체
* req.params.aa req.body.name 보내면 사용 가능
* res 응답객체
* send 문자열 보내기
* sendFile 파일보내기
* json json 객체 보내기
*
* */