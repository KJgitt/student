var db=require("./db.js");


exports.select_all=function(callback){
	var sql='select * from t_users where ACCOUNT=?';
	db.query(sql,['aa'],callback);
}