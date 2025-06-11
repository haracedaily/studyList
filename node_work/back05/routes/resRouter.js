const express = require('express');
const {supabase} = require('../config/supa.js'); // supabase 클라이언트 설정 파일을 불러옵니다.
const router = express.Router();

router.post('/save', async (req, res, next) => {
    console.log(req.body);
    console.log("api POST 통신");
    const data = await supabase
        .from('ice_res')
        .insert([req.body]);
    if (data.status === 201) {
        res.send("success");
    } else {
    res.send("fail");
    }
});

module.exports = router;