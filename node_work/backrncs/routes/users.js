const router = require('express').Router();
const User = require('../schemas/users');
require('bcrypt');
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        //insert 구문
        const { username, password, email } = req.body;
        const hashed = await bcrypt.hash(password,12);
        const newUser = new User({ username, password:hashed, email });
        let result = await newUser.save();
        console.log("결과 : ", result);
        res.status(201).json({ message: '유저 등록 성공' });
    } catch (error) {
        res.status(500).json({ message: '유저 등록 에러 발생', error: error.message });
    }
})

router.get("/", async (req, res) => {
    try {
        //select 구문
        const users = await User.find();
        console.log("결과 : ", users);
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ message: '유저 등록 에러 발생', error: error.message });
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const deleted = await User.findByIdAndDelete(id);
        if(!deleted)
            return res.status(404).json({ message: '유저를 찾을 수 없습니다.' });
        return res.json(deleted);
    }catch(error){
        return res.status(500).json({ message: '에러 발생', error: error });
    }
})

router.put("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const {username,email,password} = req.body;
        const hashed = await bcrypt.hash(password,12);
        const update = await User.findByIdAndUpdate(id,{username,email,password:hashed},{
            new:true,//새롭게 입력된 경우 업데이트
            runValidators:true // 중복되는 경우 업데이트를 하지 않는다.
        })

        if(!update)
            return res.status(404).json({ message: '수정 실패' });
        return res.json(update);
    }catch(error){
        return res.status(500).json({ message: '에러발생', error: error });
    }
})
module.exports = router;
