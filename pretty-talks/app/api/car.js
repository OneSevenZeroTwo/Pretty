var express = require("express");
var mysql = require("mysql");
var app = express();

//创建数据库链接
var connection;
function createConnection(){
	connection = mysql.createConnection({
		host:"localhost",
		user:"root",
		passsword:"",
		database:"prettytalks"
	})
}

//读取
app.get("/read",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	createConnection();
	connection.connect();
	connection.query("SELECT * FROM carlist",function(error,results,fields){
		if(error) throw error;
		res.send(results);
		connection.end();
	})
})

//修改
app.get("/write",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	
	console.log("/write",req.query);
	
	var id = req.query.id;
	var num = req.query.num;
	
	createConnection();
	connection.connect();
	connection.query(`update carlist set num="${num}" where id="${id}"`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
		connection.end();
	})
})

//删除
app.get("/delete",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	
	console.log("/delete",req.query);
	
	var id = req.query.id;
	
	createConnection();
	connection.connect();
	connection.query(`delete from carlist where id="${id}"`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
		connection.end();
	})
})

//监听端口
var server = app.listen(5555,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
