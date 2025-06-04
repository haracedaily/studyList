const express = require("express"); // 프레임워크(정해진 개발방법)
const path = require("path"); // 경로 설정
const nunjucks = require("nunjucks"); // res.render('index')
const morgan = require("morgan"); // 로그
const cookieParser = require("cookie-parser"); //쿠키
const expressSession = require("express-session"); //세션
const cors = require("cors"); // 리액트 각종언어통신
const multer = require("multer"); //파일업로드


const indexRouter = require("./routes");
const userRouter = require("./routes/user.js");
const freeBoardRouter = require("./routes/freeBoard.js");

// .env 로딩
require("dotenv").config();

// expresss 생성
const app = express();

/* 미들웨어 장착 시작 */
// cors 에러 해결 교차 출저
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(morgan("dev"));
app.use(express.json(), express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    expressSession({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            secure: false,
        },
        name: "session-cookie",
    })
);
app.set("port", 4000);
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app,
    watch: true,
});


/* 미들웨어 장착 끝 */

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/freeBoard", freeBoardRouter);

app.use((err, req, res, next) => {
    console.log("에러 미들웨어 동작");
    console.error(err);
    console.error(err.message);
    res.send(err.toString());
});

app.listen(app.get("port"), () => {
    console.log(`서버 ${app.get("port")}시작`);
});
