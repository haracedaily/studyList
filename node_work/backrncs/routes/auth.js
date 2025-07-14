const router = require('express').Router();
const User = require("../schemas/users.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post('/login', async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({error: "없는 계정"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({error: "비밀번호 틀렸다"});

        //payload는 데이터 보임
        const token = jwt.sign(
            {userId:user._id, nickName:user.username},
            //비밀번호 유효한지 검증
            process.env.JWT_SECRET,
            {expiresIn: "24h",}
        );

        res.json({token});

    }catch(err){
        res.status(500).json({error: err.message});
    }

})

module.exports = router;