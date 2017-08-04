function count(req, res, connection) {
    //执行数据库语言
    connection.query(`select count(*) from goodlist`, function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
}

exports.count = count;