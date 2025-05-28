require("dotenv").config();

const webpush = require("web-push");

webpush.setVapidDetails('mailto:nj7001@naver.com',
  'BPnnL4q6HiXuXx3eGEH8Uzyq_-l5MKJrmrtJAsRdKUWWf2dRChd2h7QxvlkLBNiFVnQzQBR7XPKkOlSqjIikp-s',
  'lr5IwslQ9vhGbddvuwmV6rqhAVMPTNVNRAFhmqnSgPE'
)

const cors = require("cors");

const pool = require("./db");
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

//서버 시작 누르게 되면 배열 값 초기화
//배열이기 때문에 서버 재시작하면 프론트 정보 사라짐
//DB에 저장 필수.
const ss = [];
// 리눅스 crontab
// node-sche
// 스케쥴러로 send
app.post("/subscribe",async (req,res,next)=>{

    // console.log(req.body.sub);
    // console.log(req.body.sub.endpoint);
    // console.log(req.body.sub.keys.p256dh);
    // console.log(req.body.sub.keys.auth);
    // console.log(req.body.city);
    // ss.push({sub:req.body});
    // console.log(ss);
    try{
    console.log("end : ",req.body.sub.endpoint);
        console.log("p256dh",req.body.sub.keys.p256dh);
            console.log("auth",req.body.sub.keys.auth);
                console.log(req.body.city);
        const conn = await pool.getConnection();
        const sql = "insert into subscriptions (endpoint,p256dh,auth,city) values(?,?,?,?)";
        const result = await conn.execute(sql,[req.body.sub.endpoint,req.body.sub.keys.p256dh,req.body.sub.keys.auth,req.body.city]);
        conn.release();
        console.log("결과 : ",result);
        res.json({message:"구독성공",result});
    }catch(e){
        console.log(e);
        res.json({message:"구독실패",e});
    }
    
});

app.get("/send", async (req, res, next) => {
    console.log("푸시알림 보내기");
    /* const sub = ss[0].sub;
    const payload = JSON.stringify({
        title: "테스트",
        body: "테스트 내용",
        icon: "https://www.google.com/favicon.ico"
    });
//보통 명시적으로 payload를 지정해주고 보내는게 일반적
    // 푸시 알림 전송
    webpush.sendNotification(sub, payload)
        .then(() => {
            console.log("푸시 알림 전송 성공");
            res.send("푸시 알림 전송 성공");
        })
        .catch(err => {
            console.error("푸시 알림 전송 실패", err);
            res.status(500).send("푸시 알림 전송 실패");
        }); */
        try {
            // console.log("query",req.query);
            const city = req.query.city;
            // console.log("city:",city);
            const conn = await pool.getConnection();
            const sql = "select * from subscriptions where city=?";
            const result = await conn.execute(sql,[city]);
            
            conn.release();
            const payload = JSON.stringify({
                title: "새로운 알림",
                body: "새로운 정보가 도착하였습니다.",
                url: "https://front02-two.vercel.app/",
            });
            const notifications = result[0].map( item => {
                console.log("item : ",item);
                const temp = {
                    endpoint:item.endpoint,
                    expirationTime : null,
                    keys:{
                        p256dh:item.p256dh,
                        auth:item.auth,
                    },
                };
                console.log("temp = ",temp);
                return webpush.sendNotification(temp, payload);
            });
            console.log("notifications : ",notifications);
            // 모든 푸시 알림 전송을 병렬로 처리
            await Promise.all(notifications);
            console.log("notifications = ",notifications);
            res.json({message:"푸시알람 전성 성공"})
        } catch (error) {
            console.error("에러 발생:", error);

            res.status(500).json({message:"푸시알람 전송 실패"});
        }
});

app.get("/",(req,res,next)=>{
    console.log("/호출");
    res.send("클라이언트에게 보내기");
})

app.get("/my",mymid)


app.listen(8080,()=>{
    console.log("서버 8080시작");
})