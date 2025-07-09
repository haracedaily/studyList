const router = require('express').Router();
const User = require('../schemas/users');

router.post("/register", async (req, res) => {
    try {
        //insert 구문
        const { username, password, email } = req.body;
        const newUser = new User({ username, password, email });
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
module.exports = router;
