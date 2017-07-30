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
createConnection();
connection.connect();

//读取
app.get("/read",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	connection.query("SELECT * FROM carlist",function(error,results,fields){
		if(error) throw error;
		res.send(results);
		// connection.end();
	})
})

//修改
app.get("/write",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	
	console.log("/write",req.query);
	
	var id = req.query.id;
	var num = req.query.num;
	
	connection.query(`update carlist set num="${num}" where id="${id}"`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
		// connection.end();
	})
})

//删除
app.get("/delete",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	
	console.log("/delete",req.query);
	
	var id = req.query.id;
	
	connection.query(`delete from carlist where id="${id}"`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
	})
})

//设置收货地址
app.get("/setAddr",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	
	var address = JSON.parse(req.query.address);
	console.log("/setAddr",address);

	var user_id = address.user_id;
	var user_name = address.user_name;
	var addressUser = address.addressUser;
	var addressPhone = address.addressPhone;
	var addressPname = address.addressPname;
	var addressCname = address.addressCname;
	var addressDname = address.addressDname;
	var addressStreet = address.addressStreet;
	var addressPostcode = address.addressPostcode;
	var isDefault = address.isDefault;

	connection.query(`insert into addresslist (user_id,user_name,addressUser,addressPhone,addressPname,addressCname,addressDname,addressStreet,addressPostcode,isDefault) values ('${user_id}','${user_name}','${addressUser}','${addressPhone}','${addressPname}','${addressCname}','${addressDname}','${addressStreet}','${addressPostcode}','${isDefault}')`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
	})
})

//读取收货地址
app.get("/getAddr",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	connection.query("SELECT * FROM addresslist",function(error,results,fields){
		if(error) throw error;
		res.send(results);
		// connection.end();
	})
})

//修改收货地址
app.get("/modifyAddr",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	
	console.log("/modifyAddr",req.query.id);
	
	var id = req.query.id;
	var address = JSON.parse(req.query.address);
	console.log("/modifyAddr",address);

	var user_id = address.user_id;
	var user_name = address.user_name;
	var addressUser = address.addressUser;
	var addressPhone = address.addressPhone;
	var addressPname = address.addressPname;
	var addressCname = address.addressCname;
	var addressDname = address.addressDname;
	var addressStreet = address.addressStreet;
	var addressPostcode = address.addressPostcode;
	var isDefault = address.isDefault;
	
	connection.query(`update addresslist set user_id="${user_id}",user_name="${user_name}",addressUser="${addressUser}",addressPhone="${addressPhone}",addressPname="${addressPname}",addressCname="${addressCname}",addressDname="${addressDname}",addressStreet="${addressStreet}",addressPostcode="${addressPostcode}",isDefault="${isDefault}" where id="${id}"`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
		// connection.end();
	})
})

//修改收货地址默认值0
app.get("/isnomodifyAddr",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
		connection.query(`update addresslist set isDefault="0"`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
		// connection.end();
	})
})
//修改收货地址默认值1
app.get("/ismodifyAddr",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	var id = req.query.id;
	connection.query(`update addresslist set isDefault="1" where id="${id}"`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
		// connection.end();
	})
})

//删除收货地址
app.get("/delAddr",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	
	console.log("/delAddr",req.query);
	
	var id = req.query.id;
	connection.query(`delete from addresslist where id="${id}"`,function(error,results,fields){
		if(error) throw error;
		res.send(results);
	})
})


//监听端口
var server = app.listen(5555,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
