function seek(req, res, tatol, connection) {
    //执行数据库语言
    connection.query(`SELECT * FROM goodlist WHERE title LIKE "%${tatol.title}%"`, function(error, results, fields) {
        if (error) throw error;
        var obj = {
            list: results
        };
        res.send(JSON.stringify(obj));
    });

    connection.end();
}




exports.seek = seek;