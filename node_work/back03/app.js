const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const expressSession = require("express-session");

dotenv.config();
app.use(morgan("combined"));
app.use('/',express.static(path.join(__dirname, "public")));
app.use(express.json());//req.body 확인
app.use(express.urlencoded({extended:false}));//req.query 확인

app.use(cookieParser(process.env.COOKIE_SECRET));

// 쿠키는 백엔드에서 생성 프론트에 전달
// 프론트는 쿠키 저장소에 넣어두고 주소 호출때 자동으로 전달

app.post("/setCookie",(req,res,next)=>{
    res.cookie("haha","hoho");
    res.cookie("haha2","hoho2");
    res.cookie("signhaha2","hoho2",{signed:true});
    res.cookie("signhaha22","hoho2",{signed:true});
    res.send("쿠키설정");
})

app.get("/getCookie",(req,res,next)=>{
    console.log("그냥 : ",req.cookies);
    console.log("암호화 : ",req.signedCookies);
    console.log("암호화 : ",req.signedCookies.signhaha22);
    res.send("쿠키확인");
})

app.get("/", (req, res) => {
    console.log("/경로 요청");
    console.log(req.query);
    console.log(req.body);
    res.send("Success");
});

app.get("/html",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"./index.html"));
});

/*app.use((err,req,res,next)=>{
    console.log(err);
    res.send(err);
});*/
app.use((error, req, res, next)=>{
    console.log("에러 : ",error);
    console.log(typeof error);
    res.send("???");
})
app.listen(3000, () => {
    console.log("서버포트 3000번 시작");
})