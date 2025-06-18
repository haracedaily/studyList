const express = require('express');
const router = express.Router();
const supabase = require('../database/db');
const axios = require('axios'); // HTTP 요청을 위한 axios 모듈 불러오기

router.get('/login', async function (req, res) {
    console.log(req.query);
    try{

    const tokenRes = await axios.post('https://kauth.kakao.com/oauth/token',{
            grant_type: 'authorization_code',
            client_id: process.env.KAKAO_CLIENT_ID,
            redirect_uri: process.env.KAKAO_REDIRECT_URI,
            code: req.query.code,
            client_secret: process.env.KAKAO_CLIENT_SECRET
        },
        {/*params:{
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_CLIENT_ID,
        redirect_uri: process.env.KAKAO_REDIRECT_URI,
        code: req.query.code,
        client_secret: process.env.KAKAO_CLIENT_SECRET
            },*/
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    });
    console.log("토큰 응답:", tokenRes.data);
    const userRes = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
            'Authorization': `Bearer ${tokenRes.data.access_token}`
        }
    });
    console.log("유저 정보 응답:", userRes.data);
    const { properties, kakao_account } = userRes.data;
    const { nickname, profile_image } = properties;
    const { email } = kakao_account;
    console.log("닉네임:", nickname, "프로필 이미지:", profile_image, "이메일:", email);
    req.session.user = {
        id: email,
        nm:nickname,
        profile_image,
        email,
        auth:'kakao',
        addr: '대구 달서',
    };
    res.redirect('http://localhost:5173/');
    }catch (error) {
        console.error("카카오 로그인 에러:", error);
        return res.status(500).json({status: 'error', message: '카카오 로그인 실패'});
    }


});

module.exports = router;
