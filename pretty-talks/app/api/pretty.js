var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var mysql = require("mysql");
var connection;

	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'prettytalks-user'
	});
require('./loginreg.js').loginreg(app,connection);
// 首页商品详情

app.get('/home', function(request, response) {
    response.append("Access-Control-Allow-Origin", "*");
    var tatol = request.query
    http.get(`http://list.meilishuo.com/search?frame=1&page=${tatol.page}&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=7be542c4-ce32-452c-b23a-9ec816344066&sort=${tatol.sort}&_=1500973075256&`, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        })
        res.on('end', function() {
            response.end(data);
            console.log('执行')
        })
    })
});

// 轮播图，活动，限时优惠
app.get('/active', function(request,response){
	response.append("Access-Control-Allow-Origin", "*");
    var tatol = request.query
    http.get(`http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C42287&callback=jsonp5868_6348_43542_13730_42287`, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        })
        res.on('end', function() {
            response.end(data.slice(33,-1))
        })
    })
});

// 好物
app.get('/well', function(request,response){
	response.append("Access-Control-Allow-Origin", "*");
    var tatol = request.query
    https.get(`https://simba-api.meilishuo.com/venus/topic/v2/queryTopicList/h5`, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        })
        res.on('end', function() {
            response.end(data)
        })
    })
});
// 第一层分类本周流行
app.get('/fsort', function(request,response){
	response.append("Access-Control-Allow-Origin", "*");
    var tatol = request.query
  https.get(`https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1500961728181`, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        })
        res.on('end', function() {
            response.end(data)
        })
    })
});
// 第二层分类,根据第一层传输的pid请求数据
app.get('/tsort', function(request,response){
	response.append("Access-Control-Allow-Origin", "*");
    var tatol = request.query
    console.log(tatol)
    https.get(`https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=${tatol.pid}&_=1500982611007`, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        })
        res.on('end', function() {
            response.end(data)
        })
    })
});

app.listen(999, function() {
    console.log('打开999端口')
})