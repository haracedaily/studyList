const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const expressSession = require("express-session");
const cors = require("cors");
dotenv.config();
app.use(morgan("combined"));
app.use('/',express.static(path.join(__dirname, "public")));
app.use(express.json());//req.body 확인
app.use(express.urlencoded({extended:false}));//req.query 확인
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true,
}));
//createContext 모든 컴포넌트에서 속성값 사용 가능, useContext
app.use(cookieParser(process.env.COOKIE_SECRET));
//withCredential:true 쿠키전송 여부
//cors 교차출처 에러 cross origin resource sharing
app.use(
    expressSession({
        secret:process.env.COOKIE_SECRET,//클라이언트에 쿠키를 보냄
        resave:false,//수정이 없더라도 세션 다시 저장
        saveUninitialized:false,//세션에 저장할 내용이 없어도 세션 생성할지
        cookie:{
            httpOnly:false,//브라우저 x
            secure:false,//http에서도 작동가능 =>true하면 https
        },
        name:"session-cookie",
        //name은 보통 connect.sid이용
        //maxAge,domain,path,expires,sameSite,httpOnly,secure등 옵션 제공
        //store옵션 메모리에 세션 저장 => store에 데이터베이스를 연결해 세션 유지
        //보통 레디스에서 자주쓰임(or 토큰)
        //세션 => jwt토큰
        //세션은 메모리가 계속 증가함 => 토큰으로 변경됨
    })
)
// 쿠키는 백엔드에서 생성 프론트에 전달
// 프론트는 쿠키 저장소에 넣어두고 주소 호출때 자동으로 전달
app.post("/setSession",(req,res,next)=>{
    req.session.userName="hong";
    req.session.loggedIn=true;

    res.send("세션설정 완료");
})
app.post("/login",(req,res,next)=>{
    console.log(req.body);
    const {email,password} = req.body;
    if(email === 'aaa@naver.com' && password === "1234"){
        req.session.user= {email};
        res.send("로그인 성공");
    }else{
    res.send("로그인 실패 email password 확인 요망");
    }
})
app.get("/mypage",(req,res,next)=>{
    console.log("마이페이지 : ",req.session);
    if(req.session.user){
        res.send(req.session.user);
    }else{
        res.send("로그인 우선");
    }
})
app.get("/logout",(req,res,next)=>{
    console.log("로그아웃 : ",req.session);
    if(req.session.user)req.session.destroy(err=>{
        if(err) return res.status(500).send(err);
        res.clearCookie("session-cookie");
        res.send("로그아웃되었음");
    });
    else res.status(500).send("로그인 우선");

})
app.get("/getSession",(req,res,next)=>{
    console.log("reqSession : ",req.session);
    console.log(req.session.userName);
    console.log(req.session.loggedIn);
    console.log("왜 여기선 안됨?");
    res.send("세션확인");
})
app.get("/destroySession",(req,res,next)=>{
    req.session.destroy(err=>{
        if(err) return res.status(500).send(err);
    });
    res.clearCookie("session-cookie");

    res.send("세션삭제 완료");

})
app.post("/setCookie",(req,res,next)=>{
    //expires 유효시간 => 초과시 자동 삭제 처리됨
    console.log(new Date(Date.now()));
    res.cookie("haha","hoho",{
        expires:new Date(Date.now()+1000*60),
    });
    res.cookie("haha2","hoho2",{
        expires:new Date(Date.now()+1000*60),
    });
    res.cookie("signhaha2","hoho2",{signed:true,
        expires:new Date(Date.now()+1000*60),
    });
    res.cookie("signhaha22","hoho2",{signed:true,
        expires:new Date(Date.now()+1000*60),
    });
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