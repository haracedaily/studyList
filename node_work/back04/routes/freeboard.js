const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   console.log("freeboard 라우터 동작");
    res.send("freeboard 정상");
});
// 동일 경로에 대해 여러 메소드 처리
// 동일 경로 여러번 선언 하는 것보다 가독성 좋음
router.route("/test")
    .get((req, res, next) => {
        console.log("freeboard test get 동작");
        res.send("freeboard test get 정상");
    })
    .post((req, res, next) => {
        console.log("freeboard test post 동작");
        res.send("freeboard test post 정상");
    })
    .put((req, res, next) => {
        console.log("freeboard test put 동작");
        res.send("freeboard test put 정상");
    })

module.exports = router;