const express = require('express');
const {supabase} = require('../config/supa.js'); // supabase 클라이언트 설정 파일을 불러옵니다.
const router = express.Router();
/*
router.route("")
    .get(async (req, res, next) => {
    console.log("이쪽으로 옴");
    const {data,error} = await supabase.from("ice_res").select();
    console.log(data);
    if(!error)
    res.render('gisa',{data});
    else
    res.send("데이터를 가져오지 못했습니다.");
})
    .post(async (req, res, next) => {
        console.log(req.body);
        return res.send("저장됨");
    });*/

router.get("",async (req, res, next) => {
        console.log("이쪽으로 옴");
        const {data,error} = await supabase.from("ice_res").select();
        console.log(data);
        if(!error)
            res.render('gisa',{data});
        else
            res.send("데이터를 가져오지 못했습니다.");
    })
router.post("",async (req, res, next) => {
    console.log(req.body);
    return res.send("저장됨");
});
router.post("/pick", async (req, res, next) => {
    console.log("선택된 데이터:", req.body);


    res.send("선택된 데이터가 서버로 전송되었습니다. " + JSON.stringify(req.body));
});
module.exports = router;