const express = require("express"); //express라이브러리 역할 app
const path = require("path");// 경로기반
const app = express();
const morgan = require("morgan"); // 로그
const cookieParser = require("cookie-parser"); // 쿠키 설정
const dotenv = require("dotenv"); // .env 파일 process
const expressSession = require("express-session"); // 세션 설정
const cors = require("cors"); // 크로스 오리진
const fs = require("fs"); //파일 시스템

try{
    fs.readdirSync("uploads");
}catch (e) {
    console.error(e);
    console.error("uploads 폴더가 없어서 uploads폴더 생성합니다.")
    fs.mkdirSync("uploads");
}


// 넌적스 요청
const nunjucks = require("nunjucks");

//
const multer = require("multer");

//.env 환경변수 불러옴
dotenv.config();



app.use('/',express.static(path.join(__dirname, "public")));
app.use(express.json());//req.body 확인
app.use(express.urlencoded({extended:false}));//req.query 확인
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true,
}));

// app.use(morgan("combined"));
// 미들웨어 사용 다른 방법
app.use((req,res,next)=>{
    if(process.env.NODE_ENV === "production")
    morgan("combined")(req,res,next);
    else
        morgan("dev")(req,res,next);
})
app.use((req,res,next)=>{
    console.log("밖에서 req 사용가능");
    (function(req,res,next){
        next();
        console.log("req사용가능");
    })(req,res,next);
})
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

/*
app.use((req,res,next)=>{
    console.log("그 다음 미들웨어로 진행",req.method);
    next();
},(req,res,next)=>{
    console.log("다음 미들웨어",req.headers);
    try{
        aset
    }catch(e){
        next(e);
    }
    next();
},(req,res,next)=>{
    console.log("다다음 미들웨어",req.uri);
    next();
});
*/

app.set("view engine","html");
nunjucks.configure(path.join(__dirname,"./views"),{
    express:app,
    watch:true,
})

const upload = multer({
    storage:multer.diskStorage({//파일은 디스크에 저장하겠다.
        destination(req,file,done){
            done(null,"uploads/");//파일이 업로드 되면 uploads경로에 저장하겠다.
        },
        // 저장할때 파일 명은
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            console.log(ext);
            console.log(path.basename(file.originalname,ext)+Date.now()+ext);
            //원래 파일명 + 현재시간 + 확장자로 설정
            done(null,path.basename(file.originalname,ext)+Date.now()+ext);
        },
    }),
    limits:{fileSize:100*1024*1024}
});

app.get("/", (req, res) => {
    console.log("/경로 요청");
    console.log(req.query);
    console.log(req.body);
    res.locals.member = [{name:"홍길동",age:20},{name:"차길동",age:25}]
    res.locals.data="새로운 데이터";
    res.locals.aaa="aaa 데이터";
    //render는 nunjuscks의 환경설정 해둔 경로의 파일을 보냄
    res.render("index",{title:"TITLE",data:"?"});//확장자 제외는 view engine에 html로 지정해뒀기 때문
});

app.get("/multipart",(req,res,next)=>{
    res.render('multipart');
})
//upload.fields([{name:""},{name:""}])
//nonde 파일 없는 경우
app.post("/upload",upload.any(),(req,res,next)=>{
    console.log("upload 들어옴");
    console.log(req.files,req.body);
    res.send("저장성공");
})

app.post("/uploads",upload.array("many"),(req,res,next)=>{
    console.log("파일 여러개");
    console.log(req.file);
    console.log(req.files,req.body);
    res.send("저장 성공");
})

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

// app.get("/", (req, res) => {
//     console.log("/경로 요청");
//     console.log(req.query);
//     console.log(req.body);
//     res.send("Success");
// });

app.get("/html",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"./index.html"));
});

/*app.use((err,req,res,next)=>{
    console.log(err);
    res.send(err);
});*/
app.use((error, req, res, next)=>{
    console.log("에러 : ",error);
    console.log("에러 미들웨어 동작");
    res.send(error.toString());
})
app.listen(3000, () => {
    console.log("서버포트 3000번 시작");
})