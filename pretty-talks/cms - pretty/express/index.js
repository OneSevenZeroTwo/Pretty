var express = require('express');
var mysql = require('mysql');
var app = express();
var fs = require('fs');
// var multer = require('multer');
var body = require('body-parser');
var connection;

function createConnection() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'prettytalks-user'
    });
    return connection;
}

app.use(body.urlencoded({
    extended: false
}))
app.use(body.json());
app.use(express.static('public'));

// 查询
app.get('/select', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var tatol = req.query;
    // console.log(tatol);
    require('./route/select.js').select(req, res, tatol, connection);

});
app.get('/allcount', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    require('./route/allcount.js').count(req, res, connection);
})
// 渲染
app.get('/check', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var tatol = req.query;
    require('./route/check.js').check(req, res, tatol, connection);
});
//删除
app.get('/del', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var tatol = req.query;
    require('./route/del.js').del(req, res, tatol, connection);
});
// 增加
app.get('/add', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var tatol = req.query;
    require('./route/add.js').add(req, res, tatol, connection);
})
// 改
app.get('/change', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var tatol = req.query;
    require('./route/change.js').change(req, res, tatol, connection);
})
// 获取html
app.get('/addhtml', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var tatol = req.query;
    require('./route/addhtml.js').addhtml(req, res, tatol, connection);
})

// 分页
app.get('/count', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    connection.query(`select count(*) from jobs`, function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
})
// var fileFormat;
// var storage = multer.diskStorage({
//  //设置上传后文件路径，uploads文件夹会自动创建。
//  destination: function(req, file, cb) {
//      cb(null, 'D:/mysql/lgw/upload')
//  },
//  //给上传文件重命名，获取添加后缀名
//  filename: function(req, file, cb) {
//      fileFormat = (file.originalname)
//      cb(null,fileFormat);
//  }
// });
// var upload = multer({
//  storage: storage
// });
//头像
// app.post('/head', upload.any(), function(req, res, next) {   
//  res.append('Access-Control-Allow-Origin','*');
//  res.send({
//      fileFormat
//  });
// });



var server = app.listen(222, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('开启端口222服务器');
})