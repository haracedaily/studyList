const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa.js');

router.get('/', async function (req, res) {
    const result=await supabase.from('ice_res').select('*').ilike('status', '%결제%');
    console.log(result);
res.render('cleaner/index.html', { title: '청소', request: req,reservation:result.data });
})

module.exports = router;