var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const nunjucks = require('nunjucks');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const resRouter = require('./routes/Res');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "html");

nunjucks.configure("views", {
    express: app,
    watch: true,
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reservation', resRouter);

module.exports = app;
