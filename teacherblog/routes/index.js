var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,'name':'laoshan'});
});
/*
router.get("/parse",function(req,res,next){
	res.render("dns",{
		'name':'laoxie',
		'age':19,
	})
});*/

router.get("/login",User.login);
router.post("/login",User.do_login);

router.get("/parse",User.parse);
router.post("/check",User.check);

module.exports = router;
