function addhtml(req,res,tatol,connection){


	//执行数据库语言
	connection.query(`insert into cms(html) values("${tatol.html}")`,function(error,results,fields){
		if (error) {throw error};
		res.send('ok');

	});

	connection.end();
}


exports.addhtml = addhtml;