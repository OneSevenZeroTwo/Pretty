var express = require('express');
var app = express();
var mysql = require("mysql");
var connection;

function createConnection(){
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'prettytalks-user'
	});
}
app.get('/reg', function(req,res){
	res.append("Access-Control-Allow-Origin", "*");
	createConnection();
	connection.query('SELECT * FROM users where phone="'+req.query.phone+'"', function(error, results, fields) {
		if(results.length == 1){
			res.send('1');
		}else if(results.length == 0){
			res.send('0');
			connection.query('INSERT INTO users(phone,password) values("'+req.query.phone+'","'+req.query.password+'")',(error, results, fields)=>{});
		}
		connection.end();
	});
});

app.get('/login', function(req,res){
	res.append("Access-Control-Allow-Origin", "*");
	createConnection();
	connection.query('SELECT * FROM users where (username = "'+req.query.user+'" or phone = "'+req.query.user+'" or email = "'+req.query.user+'") and password = "'+req.query.password+'"', function(error, results, fields) {	
	if(results.length != 0){
		res.send('1');
	}else if(results.length == 0){
		res.send('0');
	}
	connection.end();
	});
});

var server = app.listen(4399);