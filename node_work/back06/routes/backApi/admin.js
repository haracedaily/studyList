const express = require('express');
const router = express.Router();
const supabase = require('../../utils/supa');

router.post('/login',async function(req, res, next) {
    console.log(req.body);
try{
    const result = await supabase.from('member').select('*').eq("id",req.body.id).single();
    console.log(result);
    res.json(result);
}   catch(e) {
    res.status(500).send(e);
}
})

module.exports = router;