require("dotenv").config();

const webpush = require("web-push");

webpush.setVapidDetails('mailto:nj7001@naver.com',
  'BNgqWyxPFLcg-5Z95bQvQoNsymYpYx1VOcca7LRC93671ybRS58GAVd4ESfk1iNEq2pZ56QtZVb0zzW1eCMsTa4',
  'n_1GcmidyHf0IUhF2SSyot5G3goJmJxkYeqnegUK7us'
)

const cors = require("cors");

// const pool = require("./db");
const express = require("express"); 
const path = require("path"); 
const morgan = require("morgan"); 
const cookieParser = require("cookie-parser");


const mymid=require("./mymiddle");


const app = express();

// console.log(morgan().toString());
app.use(morgan());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req,res,next)=>{
    console.log("무조건 실행");
    next();
})

app.get("/",(req,res,next)=>{
    console.log("/호출");
    res.send("클라이언트에게 보내기");
})

app.get("/my",mymid)


app.post("/subscribe",(req,res,next)=>{
    console.log(req.body);
    res.send("구독성공");
})

app.listen(8080,()=>{
    console.log("서버 8080시작");
})