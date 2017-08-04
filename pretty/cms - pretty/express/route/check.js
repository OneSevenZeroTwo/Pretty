function check(req,res,tatol,connection){
	//执行数据库语言
	connection.query(`select * from goodlist where id=${tatol.id}`,function(error,results,fields){
		if (error) throw error;

		var obj = {
			list:results
		};
		// console.log(obj)
		res.send(JSON.stringify(obj));
	});

	connection.end();
}


exports.check = check;