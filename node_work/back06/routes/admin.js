var express = require('express');
var router = express.Router();
const supabase = require('../utils/supa.js');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const {data} = await supabase.from('cleaner').select('*');
  res.render('admin', { title: '관리자', request: req, cleaners:data});
});

router.post('/', async function(req, res, next) {
    /*const { email, password } = req.body;
    const result = await supabase.auth.signUp({email, password});
    if (result.error) {
        console.error(result.error);
        res.status(400).json({ error: result.error.message });
    } else {
        res.status(200).json({ message: '회원가입 성공', user: result.data.user });
    }*/
  const { name, email, phone, addr } = req.body;
    const result = await supabase.from('cleaner').insert({
        name,
        email,
        phone,
        "address": addr
    });
    if(result.error){
      console.log("슈퍼베이스 저장 오류");
      console.log(result.error);
    }

    // res.render('admin', { title: '관리자', request: req});
    res.redirect('/admin');

})


module.exports = router;
