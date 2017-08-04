function type(req,res,tatol,connection){

	var page = 10 * (tatol.page - 1);
	//执行数据库语言
	connection.query(`select * from goodlist where sort="${tatol.sort}" limit ${page},10`,function(error,results,fields){
		if (error) throw error;
        var obj = {
            list: results
        };
        res.send(JSON.stringify(obj));
	});

	connection.end();
}


exports.type = type;