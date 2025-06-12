const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa.js');

router.get('/', async function (req, res) {
    const {data,err} = await supabase.from('ice_res').select('*');
    res.render('reservation', { title: '예약',data,request: req, today: new Date().toLocaleDateString().replaceAll(" ","").slice(0,-1).replaceAll(".","-") });
})
router.post('/', async function (req, res) {
    console.log(req.body);
    res.send("예약이 완료되었습니다.");
})
module.exports = router;