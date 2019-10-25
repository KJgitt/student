var User_model=require("../models/user_model.js");

exports.login=function(req,res,next){
	//console.log(123);
	res.render("login");
}

exports.do_login=function(req,res,next){
	//接收用户名和密码

	var name=req.body.username;
	var pass=req.body.pass;
	//console.log(name);
	//console.log(pass);
	User_model.select_all(function(err,data){
		//console.log(data);
		if(data.length>0){
			res.json({
				'errmsg':'查询成功',
				'errno':101,
				'data':data[0],
			});
		}else{
			res.json({
				'errmsg':'查询失败',
				'errno':1,
				'data':'',
			})
		}
	});
}

exports.parse=function(req,res,next){
	var xx=req.query.yy;
	console.log(xx);
}

exports.check=function(req,res,next){
	var val=req.body.value;
	//console.log(val);
	if(val=="laoshan"){
		res.json({
			errmsg:"接收正常",
			errno:101,
		});
	}else{
		res.json({
			errmsg:"接收err",
			errno:1,
		})
	}
	
}