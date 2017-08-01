var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var mysql = require("mysql");
var fs = require("fs");
var multer = require('multer');
var bodyParser = require('body-parser');
var connection;
var imgurl;
var createConnection = function() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'prettytalks-user'
    });
    return connection;
}

var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function(req, file, cb) {
        cb(null, '../../public/headImg/')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function(req, file, cb) {
        // console.log(file.originalname)
        fileFormat = (file.originalname).split(".");
        imgurl = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1];
        cb(null, imgurl);
    }
});
var upload = multer({
    storage: storage
});
app.use(bodyParser.urlencoded({
    extended: false
}))

require('./loginreg.js').loginreg(app, createConnection);
require('./car.js').car(app, createConnection);
// 首页商品详情

app.get('/home', function(request, response) {
    response.append("Access-Control-Allow-Origin", "*");
    createConnection();
    connection.connect();
    var tatol = request.query;
    var page = 10 * (tatol.page - 1);
    connection.query(`select * from goodlist where sort="${tatol.sort}" limit ${page},10`, function(error, results, fields) {
        if (error) throw error;
        var obj = {
            list: results
        };
        response.send(JSON.stringify(obj));
    });

    connection.end();
});

// 轮播图，活动，限时优惠
app.get('/active', function(request, response) {
    response.append("Access-Control-Allow-Origin", "*");
    var tatol = request.query
    http.get(`http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C42287&callback=jsonp5868_6348_43542_13730_42287`, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        })
        res.on('end', function() {
            response.end(data.slice(33, -1))
        })
    })
});

// 好物
app.get('/well', function(request, response) {
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
app.get('/fsort', function(request, response) {
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
app.get('/tsort', function(request, response) {
    response.append("Access-Control-Allow-Origin", "*");
    var tatol = request.query
    //  console.log(tatol)
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

//详情页
app.get('/main', function(request, response) {
    response.append("Access-Control-Allow-Origin", "*");
    var getId = request.query
//  console.log(getId)
    https.get(`https://m.meilishuo.com/detail/mls/v1/h5?iid=${getId.iid}`, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        })
        res.on('end', function() {
            response.end(data)
        })
    })
});

//列表页1
app.get('/choose', function(req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    createConnection();
    connection.connect();
    var fcid = req.query.pcid;
    console.log(req.query)
    connection.query(`SELECT * FROM goodlist where fcid="${fcid}"`, function(error, results, fields) {
       if (error) { throw error };

        res.send(results);
    })
    connection.end();
})
// 下载头像到本地

app.post('/sethead', upload.any(), function(req, res, next) {	
	res.append('Access-Control-Allow-Origin','*');
	res.send({
		fileFormat
	})
});
  

app.get('/newsimg', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var tatol = req.query;
    connection.query(`UPDATE users SET username="${tatol.username}", headerImgUrl="${tatol.headerImgUrl}" WHERE phone="${tatol.phone}"`, function(error, results, fields) {
        if (error) { throw error };

        res.send(results);

    });
    connection.end();
});

//评论
app.get('/discuss', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    createConnection();
    connection.connect();
    var IId = req.query;
//  console.log(IId)
    connection.query(`SELECT * FROM discuss where iid="${IId.iid}"`, function(error, results, fields) {
        if (error) { throw error };
        
        if(results == ''){
        	res.send('id为空')
        }else{
        	res.send(results);
        }
    });
    connection.end();
});

//收藏
app.get('/collect', function(req, res) {
    res.append('Access-Control-Allow-Origin', '*');
    
    var goId = req.query;
   createConnection();
connection.connect();
    console.log(goId)
    connection.query(`SELECT * FROM users where id="${goId.id}"`, function(error, results, fields) {
        var obj = {
            list: results
        };
        var res = null;
        var chang = JSON.parse(JSON.stringify(obj)).list[0].iid
        if(chang == null){
        	chang = goId.iid
        }else{
        	chang += ',' + goId.iid
        }
        if(results.length == 1){
        	connection.query(`UPDATE users SET iid="${chang}" WHERE id=${goId.id}`, function(error, results, fields) {
        		if (error) { throw error };
        		
    });
        }
        
        console.log(JSON.parse(JSON.stringify(obj)).list[0].iid)
//      res.send(results) 
    });
//  connection.end();
});

//app.get('/case', function(req, res) {
//  res.append('Access-Control-Allow-Origin', '*');
//  createConnection();
//  connection.connect();
//  var collId = req.query;
//  console.log(collId)
//  connection.query(`UPDATE users SET iid="${collId.iid}" where id=${collId.id}`, function(error, results, fields) {
//      if (error) { 
//      	throw error
//      }
//      res.send('ok') 
//  });
//  connection.end();
//});

app.get('/seek', function(request, response) {
    response.append("Access-Control-Allow-Origin", "*");
    createConnection();
    connection.connect();
    var tatol = request.query;
    connection.query(`SELECT * FROM goodlist WHERE title LIKE "%${tatol.title}%"`, function(error, results, fields) {
        if (error) throw error;
        var obj = {
            list: results
        };
        response.send(JSON.stringify(obj));
    });

    connection.end();
});
// 搜索得到的列表
app.get('/liseek', function(request, response) {
    response.append("Access-Control-Allow-Origin", "*");
    createConnection();
    connection.connect();
    var tatol = request.query;
    var page = 10 * (tatol.page - 1);
    connection.query(`SELECT * FROM goodlist WHERE title LIKE "%${tatol.title}%" and sort="${tatol.sort}" limit ${page},10 `, function(error, results, fields) {
        if (error) throw error;
        var obj = {
            list: results
        };
        response.send(JSON.stringify(obj));
        console.log('执行')
    });

    connection.end();
});

app.get('/getstar', function(request, response) {
    response.append("Access-Control-Allow-Origin", "*");
    createConnection();
    connection.connect();
    var tatol = request.query;
    connection.query(`SELECT * FROM goodlist WHERE iid = "${tatol.iid}"`, function(error, results, fields) {
        response.send(results);
    });

    connection.end();
});


app.listen(999, function() {
    console.log('打开999端口')
})