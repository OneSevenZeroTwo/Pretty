function change(req,res,tatol,connection){
	//执行数据库语言
	connection.query(`UPDATE goodlist SET cfav="${tatol.cfav}", image="${tatol.image}", price="${tatol.price}", title="${tatol.title}", imgAll="${tatol.imgAll}", sort="${tatol.sort}", buyCount="${tatol.buyCount}", city="${tatol.city}", hot="${tatol.hot}", fcid="${tatol.fcid}", pid="${tatol.pid}", iid="${tatol.iid}" where id=${tatol.id}`,function(error,results,fields){
		if (error) {throw error};
		res.send('ok');

	});

	connection.end();
}


exports.change = change;



