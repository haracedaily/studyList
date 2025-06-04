const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("user 라우터 동작");
    res.send("정상");
})

router.get("/aa", (req, res, next) => {
    console.log("user aa동작");
    res.send("aa 정상");
})


router.get("/:id", (req, res, next) => {
    console.log("user 라우터 동작");
    console.log(req.params.id);
    res.send(`유저 아이디 : ${req.params.id}`);
})

module.exports = router;