const router = require('express').Router();

router.get('/', function (req, res) {
    res.status(200).json({
        message: '배불러.. 집 가고 싶다..',
        status: 'success'
    });
})

module.exports = router