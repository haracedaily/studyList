const express = require('express');
const router = express.Router();
const supabase = require('../database/db');
const bcrypt = require('bcryptjs');

router.get('/', function (req, res) {
    const data = {};
    data.msg='success';
    res.json(data);
})
router.post('/login',async function (req, res) {
    console.log(req.body);
    const result = await supabase.from('member').select('*').eq('id',req.body.id);
    console.log(result);
    const data = {};
    if(result.error){
        console.log('에러발생:', result.error);
        data.flag='error';
        data.msg=result.error;
        res.status(500).json(data);
    }else{
        if(result.data.length>0){
            bcrypt.compare(req.body.password.trim(),result.data[0].pw,(err, res2)=>{
                if(err){
                    console.log('비밀번호 비교 에러:', err);
                    data.flag='error';
                    data.msg='비밀번호 비교 에러';
                    res.status(500).json(data);
                }else if(!res2){
                    console.log('비밀번호가 틀렸습니다.');
                    data.flag='error';
                    data.msg='비밀번호가 틀렸습니다.';
                    res.status(401).json(data);
                }else{
                data.flag='success';
                data.msg='로그인 성공';
                data.data=result.data;
                req.session.user = result.data[0];
                res.status(200).json(data);
                }
            });
        }else{
            data.flag='error';
            data.msg='존재하지 않는 아이디입니다.';
            res.status(404).json(data);
        }
    }
})

router.get('/me', function (req, res) {
    console.log(req.session);
    console.log(req.session.user);
    if(req.session.user) {
        res.json({status:true,user:req.session.user});
    }else{
        res.json({status:false});
    }
})

router.post('/logout', function (req, res) {
    req.session.destroy((err) => {
        if (err) {
            console.error('세션 삭제 중 오류 발생:', err);
            return res.status(500).json({status: false, message: '로그아웃 실패'});
        }
        res.clearCookie('login'); // 쿠키 삭제
        res.json({status: true, message: '로그아웃 성공'});
    })
})
module.exports = router;