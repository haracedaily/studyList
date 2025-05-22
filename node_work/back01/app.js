const pool = require("./db");
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan"); // (req,res,next=>{}) 미들웨어'
// localhost:8080/
// 쿠키의 평문값은 암호화 키를 사용해서 암호화 처리
// application -> cookie -> 자동으로 날아감
const cookieParser = require("cookie-parser");
const cors = require("cors");

// 암호화..
console.log(process.env.COOKIE_SECRET);
console.log(cors);
app.use(cors({
  origin: 'https://front01-chi.vercel.app', // 허용할 클라이언트의 출처
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // 쿠키 전달 허용, 대신 사용하려면 origin을 명시해줘야한다.
}));
app.use(morgan("dev")); // 미들웨어 등록
// console.log(morgan("dev").toString());
// static에서는 해당 경로에서 해당하는 파일이 있으면 클라이언트에게 준다.
// 클라이언트가 요청하는 uri, 해당 경로
// ex) app.use("/img", express.static(path.join(__dirname, "public")));
// 기존 url/파일명 => 리턴 : /public/파일명
app.use("/img", express.static(path.join(__dirname, "public")));
// console.log(express.static(path.join(__dirname, "public")).toString());
// req.body 파리메타 받아줌 { id:"aaa@naver.com"}
app.use(express.json());
// req.query ?aa=10&bb=20;
app.use(express.urlencoded({ extended: false }));
//단방향 암호화 수업하긴 했지만..
//여기서는 양방향 암호화처리
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
    // console.log(req.body);
    // console.log(req.query);
    console.log(req.headers);
    console.log("모든 요청은 여기 들렸다가 진행된다.");
    next();
});

app.get(
    "/",
    async (req, res, next) => {
        // console.log('req.body');
        // console.log(req.body);
        // console.log('req.query');
        // console.log(req.query);
        // console.log(req.query.name);
        // console.log(req.query.age);

        const conn = await pool.getConnection(); // 연결 객체 가져오기
        const result = await conn.execute("select * from users"); // sql 구문 실행
        conn.release(); // 연결 객체 반환
        next();
        // 끝...
        res.status(200).json(result[0]); // 클라이언트한테 hello get 보내기
    },
    (req, res, next) => {
        console.log("일로오나");
        // res.json('이거 두번 보내기 되냐');
    }
);
app.get("/getCoo",(req,res,next)=>{
    console.log("쿠키 : ",req.cookies);
    console.log("암호쿠키 : ",req.signedCookies);
    res.send("저기옴");
})
app.get("/setCoo",(req,res,next)=>{
    console.log("test");
    res.cookie("name","test",{
        expires:new Date(Date.now()+1000*5),
        secure:true,
        signed:true,
        httpOnly:true
    });
    // res.cookie("name","test",{signed:true, httpOnly:true});
    // expires 유효시간
    // httpOnly http외에선 사용 막기
    // secure 보안상 막음
    // signed 암호화
    res.send("여기옴?");
})

app.post("/", async (req, res) => {
    const conn = await pool.getConnection(); // 연결 객체 가져오기
    const result = await conn.execute(`insert into users 
                                     (id,password)
                                     values
                                     ('${req.body.name}','${req.body.age}')`); // sql 구문 실행
    conn.release(); // 연결 객체 반환
    res.send(result);
});
app.put("/", async (req, res) => {
    console.log(req.body);
    console.log(req.query);
    if(req.body.idx||req.query.idx){
        const idx = req.body.idx||req.query.idx;
        const id = req.body.id||req.query.id;
        const password = req.body.password||req.query.password;
        console.log(idx,id,password);
    const conn = await pool.getConnection();
    const result = await conn.execute("update users set id = ? , password = ? where idx = ?",[id,password,idx]);
    conn.release();
    res.send(result);
    }else{
        res.send("idx값이 빠졌습니다.")
    }


});
app.delete("/", async (req, res) => {
    if(req.body.idx||req.query.idx){
        const idx = req.body.idx||req.query.idx;
        const conn = await pool.getConnection();
        const result = await conn.execute("delete from users where idx = ?",[idx]);
        conn.release();
        res.send(result);
    }else{
    res.send("프론트님 idx 값을 넘겨주세요");
    }
});

app.get("/html", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

// 모든 에러는 여기로 진행된다
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("에러가발생하였습니다.");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});