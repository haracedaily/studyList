const express = require('express'); //express 모듈 불러오기 get post put delete 등등 라우팅을 쉽게 해주는 모듈
const cookieParser = require('cookie-parser'); // 쿠키 파서 모듈 불러오기
const session = require('express-session'); // 세션 모듈 불러오기
const cors = require('cors'); // CORS 모듈 불러오기
const app = express();
const PORT = process.env.PORT||4003; // 서버 포트 번호

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱
app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5174'], // 허용할 도메인
    credentials: true, // 쿠키를 포함한 요청을 허용
}));
app.use(express.static('public')); // 정적 파일 제공
app.use(cookieParser());
app.use(session({
    secret:"mySecretKey", // 세션 암호화 키
    resave: false, // 세션이 수정되지 않아도 다시 저장
    saveUninitialized: false, // 초기화되지 않은 세션을 저장하지 않음
    cookie: {
        secure: false, // HTTPS를 사용할 때 true로 설정
        maxAge: 1000 * 60 * 60 * 24, // 쿠키 유효기간 1일
        httpOnly: true // 클라이언트 측 스크립트에서 쿠키 접근 방지
    },
    name: 'login',
}));

app.use('/api', require('./routes/api')); // API 라우터 설정

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
})