const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa.js');

router.get('/', async function (req, res) {
    const {data,err} = await supabase.from('ice_res').select('*');
    res.render('reservation', { title: '예약',data,request: req, today: new Date().toLocaleDateString().replaceAll(" ","").slice(0,-1).replaceAll(".","-") });
})
router.post('/', async function (req, res) {
    console.log(req.body);
    const {name,tel,email,addr,date,time,model,capacity,service,remark} = req.body;


    const result = await supabase.from('ice_res').insert({
        name,
        tel,
        email,
        addr,
        date: new Date(date),
        time,
        model,
        capacity,
        service,
        remark,
        payment_amount: 30000
    });
    console.log(result);
    if(!result.error)
    res.json(result);
    else
        res.json(result.data);
})
module.exports = router;