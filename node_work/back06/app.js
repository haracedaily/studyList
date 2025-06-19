var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const expressSession = require('express-session');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const nunjucks = require('nunjucks');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const resRouter = require('./routes/Res');
const payRouter = require('./routes/pay');
const adminRouter = require('./routes/admin');
const cleanerRouter = require('./routes/cleaner');
const loginRouter = require('./routes/login');
const backRouter = require('./routes/backApi/admin');
var app = express();

app.use(cors(
    {origin: ['http://localhost:5173','http://localhost:5174'],
        credentials: true, // 쿠키를 포함한 요청을 허용
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메소드
        // allowedHeaders: ['Content-Type', 'Authorization'] // 허용할 헤더
    } // 프론트엔드 주소
));// CORS 설정
app.use(logger('dev'));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit:'50mb',extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret: 'my-secret', // 세션 암호화 키
    resave: false,// 세션이 변경되지 않으면 저장 안함
    saveUninitialized: false, // 초기화되지 않은 세션을 저장하지 않음
    cookie:{
        secure: false, // HTTPS를 사용할 때 true로 설정
        maxAge: 1000 * 60 * 60 * 24, // 쿠키 유효기간 1일
        httpOnly: true // 클라이언트 측 스크립트에서 쿠키 접근 방지
    },
    name:"sesssion-cookie", // 쿠키 이름 설정
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "html");

nunjucks.configure("views", {
    express: app,
    watch: true,
});
app.use((req, res, next) => {
    res.locals.user = req.session.user; // 세션에 저장된 사용자 정보
    next();
})
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/reservation', resRouter);
app.use('/pay', payRouter);
app.use('/cleaner', cleanerRouter);
app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/back', backRouter);
module.exports = app;
