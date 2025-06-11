const express = require('express');
const {supabase} = require('../config/supa.js'); // supabase 클라이언트 설정 파일을 불러옵니다.
const router = express.Router();

router.get('', async (req, res, next) => {
    console.log("이쪽으로 옴");
    const {data,error} = await supabase.from("ice_res").select();
    console.log(data);
    if(!error)
    res.render('gisa',{data});
    else
    res.send("데이터를 가져오지 못했습니다.");
});

module.exports = router;