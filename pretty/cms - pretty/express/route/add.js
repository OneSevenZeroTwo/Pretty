function add(req,res,tatol,connection){


	//处理头像
	//执行数据库语言
	connection.query(`INSERT INTO goodlist (cfav, image, price, title, sort, buyCount, city, hot, fcid, pid, iid) VALUES ("${tatol.cfav}", "${tatol.image}", "${tatol.price}", "${tatol.title}", "${tatol.sort}", "${tatol.buyCount}", "${tatol.city}", "${tatol.hot}", "${tatol.fcid}", "${tatol.pid}", "${tatol.iid}")`,function(error,results,fields){
		if (error) {throw error};
		res.send('ok');

	});

	connection.end();
}


exports.add = add;
;