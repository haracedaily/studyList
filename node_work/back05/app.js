// 설치한 npm 패키지들을 불러옵니다.
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const cors = require('cors');
require('dotenv').config();

// models 폴더에 있는 sequelize 객체를 불러옵니다.
const { sequelize, User } = require('./models');
const app = express();
/*
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app,
    watch: true,
});*/



// sync 동기화
sequelize.sync({force:false})//force:true는 테이블을 새로 만듭니다. 고로 false로 설정하여 기존 테이블을 유지합니다.
    .then(() => {
        console.log("DB 연결 성공");
    })
.catch(console.error);

// User.create({name: '홍길동', age: 20, married: 0, comment:"asdf라는 사람이야"});
/*
(async function () {
    // commonjs에서는 사용불가함
    //await를 top 레벨에서 사용하기 위해 즉시 실행 함수로 감쌉니다.
    const result = await User.findAll({
        // where: { name: '홍길동' }, // 조건을 추가할 수 있습니다.
        // order: [['id', 'DESC']], // 정렬을 추가할 수 있습니다.
        attributes: ['id', 'name', 'age', 'married', 'comment', 'created_at'], // 가져올 컬럼을 지정합니다.
    });
    console.log(result);
})();
*/

app.use(cors()); // CORS 설정
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
app.set("port", 4001);
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app,
    watch: true,
});
const resRouter = require('./routes/resRouter.js');
const gisaRouter = require('./routes/gisaRouter.js');
app.use("/res",resRouter);
app.use("/gisa", gisaRouter);

/* 미들웨어 장착 끝 */
app.use((req,res,next)=>{
    console.log('해당하는 라우터가 없다');
    const error = new Error('해당하는 페이지가 없습니다.');
    next(error); // 에러 미들웨어로 가라
})

app.use((err, req, res, next) => {
    console.log("에러 미들웨어 동작");
    console.error(err);
    console.error(err.message);
    res.send(err.toString()+"<a href='/'>첫페이지로</a>");
});

app.listen(app.get("port"), () => {
    console.log(`서버 ${app.get("port")}시작`);
});