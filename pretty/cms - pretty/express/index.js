var express = require('express');
var mysql = require('mysql');
var http = require('http')
var app = express();
var fs = require('fs');
var http = require('http')
  // var multer = require('multer');
var body = require('body-parser');
var connection;

function createConnection() {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lagou'
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
});
// 服务器代理，录数据用！

app.get('/lu', function(request, response) {
  response.append("Access-Control-Allow-Origin", "*");
  var tatol = request.query
  http.get(`http://m.meilishuo.com/detail/mls/v1/h5?iid=${tatol.iid}&_ajax=1`, function(res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    })
    res.on('end', function() {
      response.end(data);
      // console.log('执行')
    })
  })
});

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
  // 分类查询
app.get('/type', function(req, res) {
  res.append('Access-Control-Allow-Origin', '*');
  createConnection();
  connection.connect();
  var tatol = req.query;
  require('./route/type.js').type(req, res, tatol, connection);
})

// 分页
app.get('/count', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var tatol = req.query
    connection.query(`select count(*) from goodlist  where  sort="${tatol.sort}"`, function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    });

    connection.end();
  })
  // 查询分页
app.get('/seacount', function(req, res) {
  res.append('Access-Control-Allow-Origin', '*');
  createConnection();
  connection.connect();
  var tatol = req.query
  connection.query(`SELECT COUNT(*) FROM goodlist WHERE title LIKE "%${tatol.title}%"`, function(error, results, fields) {
    if (error) throw error;
    res.send(results);
  });

  connection.end();
})

//模糊查询
app.get('/seek', function(req, res) {
  res.append('Access-Control-Allow-Origin', '*');
  createConnection();
  connection.connect();
  var tatol = req.query;
  require('./route/seek.js').seek(req, res, tatol, connection);
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

app.get('/aa', function(request, response) {
  response.append("Access-Control-Allow-Origin", "*");
  var tatol = request.query
    //  console.log(tatol)
  http.get(`http://list.meilishuo.com/search?frame=0&page=1&sort=${tatol.sort}&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=7be542c4-ce32-452c-b23a-9ec816344066&fcid=${tatol.fcid}&_=1501754701755`, function(res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    })
    res.on('end', function() {
      response.end(data)
    })
  })
});

var server = app.listen(222, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('开启端口222服务器');
})