const express= require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const fs = require("fs"); // 폴더 만들기

//require 같은 경우 메모리 참조 형태라 중복으로 선언하여도 참조할 뿐이라 문제 없다.

// uploads 폴더 없으면 생성
try {
    fs.readdirSync("uploads");
} catch (e) {
    console.log("폴더가 없어서 uploads 폴더 생성");
    fs.mkdirSync("uploads");
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            console.log(ext);
            console.log(path.basename(file.originalname, ext) + Date.now() + ext);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 100 * 1024 * 1024 },
});

router.get("/", (req, res, next) => {
    console.log("기본적인 설정 종료");
    console.log(req.app.get("static"));
    res.locals.myname="홍길동";
    res.locals.aa="aa";
    res.locals.bb="bb";
    const users = [
        {name:"홍길동", age:20},
        {name:"김길동", age:30},
        {name:"이길동", age:40},
    ];

    res.render('index',{title:"title제목",users});
});

router.get("/aa", (req, res, next) => {
    console.log(req.app.set("static","전역변수 설정"));
    res.send("aa 정상");
});

router.get("/aa/:id", (req, res, next) => {
    console.log(req.app.set("static","전역변수 설정"));
    res.render('aa',{});
});

router.post("/upload", upload.single("image"), (req, res, next) => {
    console.log("업로드 됨");
    res.json({message:"upload success",
        filename: req.file.filename,
        originalname: req.file.originalname,
        path:req.file.path,
    });
})

module.exports = router;