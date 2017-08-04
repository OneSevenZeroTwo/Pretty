function del(req,res,tatol,connection){

	//执行数据库语言
	connection.query(`DELETE FROM goodlist WHERE id="${tatol.id}"`,function(error,results,fields){
		if (error) throw error;
		res.send('ok');

	});

	connection.end();
}


exports.del = del;

