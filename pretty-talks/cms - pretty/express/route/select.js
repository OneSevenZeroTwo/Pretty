function select(req,res,tatol,connection){
	//执行数据库语言
	var page = 10*(tatol.page-1);
	connection.query(`select * from goodlist limit ${page},10`,function(error,results,fields){
		if (error) throw error;
		var obj = {
			list:results
		};
		res.send(JSON.stringify(obj));
	});

	connection.end();
}




exports.select = select;
