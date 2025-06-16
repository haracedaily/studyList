var express = require('express');
var router = express.Router();
const supabase = require('../utils/supa.js');

/* GET home page. */
router.get('', async function(req, res, next) {
  const result = await supabase.from('ice_res').select('*');
  console.log(result);

console.log(req.session.user);
  res.render('index', { title: '홈',request:req,user:req.session.user });
});


module.exports = router;
