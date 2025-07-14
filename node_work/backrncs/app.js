const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');//http프로토콜 브라우저는 규격상 쿠키가 존재하지만 리액트 네이티브(모바일)환경에서는 불가능함
const expressSession = require('express-session');
const logger = require('morgan');


const { MONGO_PASSWORD, MONGO_USER, MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;
require("dotenv").config();  // .env)
const mongo = require("./schemas");
mongo();

const cors = require('cors');
const app = express();
const port = process.env.PORT || 4040;

app.use(logger('dev'));
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
    secret: process.env.SESSION_SECRET ||
    'default_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let authRouter = require('./routes/auth');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auths',authRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

})