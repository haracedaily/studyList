const express= require('express');
const router = express.Router();
const supabase = require('../utils/supa.js');

router.get('/', function (req, res) {
    res.render('login.html', { title: '로그인', request: req,user:req.session.user });
})

router.post('/', async function (req, res) {
    const { phone, password } = req.body;
    const result = await supabase
        .from('cleaner')
        .select('*')
        .eq('phone', phone)
        .single();
    console.log(result);
    if( result.data ) {
        req.session.user = result.data;
        console.log('데이터 있음 로그인 성공');
        res.redirect('/');
        // res.render('login.html', { title: '로그인성공', request: req});
    }else{
        console.log('없다');
        // 로그인 실패 error 가지고 이동
        res.render('login', { title: '로그인실패', request: req, error: '로그인 정보가 일치하지 않습니다.' });
    }

})

router.get('/logout', function (req, res) {
    req.session.destroy(function(err) {
        res.clearCookie('session-cookie'); // 세션 쿠키 삭제
        if(err) {
            console.log('세션 삭제 실패');
            return res.redirect('/');
        }
        console.log('세션 삭제 성공');
        res.redirect('/');
    });
})
module.exports = router;