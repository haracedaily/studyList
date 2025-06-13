const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa.js');

router.get('/checkout', async function (req, res) {
    console.log(req.query.res_no);
    const {data,err} = await supabase.from('ice_res').select('*').eq('res_no', req.query.res_no).single();
    console.log(data);
    console.log(data.tel.replace(/-/g,""));
    res.render('pay/checkout', { title: '결제', request: req, today: new Date().toLocaleDateString().replaceAll(" ", "").slice(0, -1).replaceAll(".", "-"),reservation:data });
})

//결제 성공 -> ice_res -> 결제완료 res_no 예약번호
router.get('/success', async function (req, res) {
    console.log(req.query);
    const result = await supabase.from('ice_res').update({status: '결제완료'}).eq('res_no', req.query.orderId).select();
    console.log(result.data[0]);
    return res.render('pay/success', { title: '결제 성공', request: req, today: new Date().toLocaleDateString().replaceAll(" ", "").slice(0, -1).replaceAll(".", "-"),reservation:result.data });
})

module.exports = router;