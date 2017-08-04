exports.car = function(app, createConnection) {
    var connection = createConnection();
    connection.connect();
    //读取购物车列表
    app.get("/read", function(req, res) {
        res.append("Access-Control-Allow-Origin", "*");
        // connection.connect();
        var user_id = req.query.user_id;
        connection.query(`SELECT * FROM carlist where user_id="${user_id}"`, function(error, results, fields) {
            if (error) throw error;
            res.send(results);
            // connection.end();
        })
    })

    //修改购物车列表数量
    app.get("/writeNum", function(req, res) {
            res.append("Access-Control-Allow-Origin", "*");

            console.log("/writeNum", req.query);

            var id = req.query.id;
            var num = req.query.num;

            // connection.connect();
            connection.query(`update carlist set num="${num}" where id="${id}"`, function(error, results, fields) {
                if (error) throw error;
                res.send(results);
                // connection.end();
            })
        })
        // 修改加入订单状态
    app.get("/writeOrder", function(req, res) {
        res.append("Access-Control-Allow-Origin", "*");
        console.log("/writeOrder", req.query);
        var id = req.query.id;
        // connection.connect();
        connection.query(`update carlist set orders=0`, function(error, results, fields) {
            if (error) {
                throw error
            } else {
                connection.query(`update carlist set orders=1 where id="${id}"`, function(error, results, fields) {
                    if (error) throw error;
                    res.send(results);
                    // connection.end();
                })
            };
            // connection.end();
        })
    })

    //删除购物车列表
    app.get("/delete", function(req, res) {
        res.append("Access-Control-Allow-Origin", "*");

        console.log("/delete", req.query);

        var id = req.query.id;

        // connection.connect();
        connection.query(`delete from carlist where id="${id}"`, function(error, results, fields) {
            if (error) throw error;
            res.send(results);
            // connection.end();
        })

        //设置收货地址
        app.get("/setAddr", function(req, res) {
            res.append("Access-Control-Allow-Origin", "*");

            var address = JSON.parse(req.query.address);
            console.log("/setAddr", address);

            var user_id = address.user_id;
            var user_name = address.user_name;
            var addressUser = address.addressUser;
            var addressPhone = address.addressPhone;
            var addressPname = address.addressPname;
            var addressCname = address.addressCname;
            var addressDname = address.addressDname;
            var addressPid = address.addressPid;
            var addressCid = address.addressCid;
            var addressDid = address.addressDid;
            var addressStreet = address.addressStreet;
            var addressPostcode = address.addressPostcode;
            var isDefault = address.isDefault;

            // connection.connect();
            connection.query(`insert into addresslist (user_id,user_name,addressUser,addressPhone,addressPname,addressCname,addressDname,addressPid,addressCid,addressDid,addressStreet,addressPostcode,isDefault) values ('${user_id}','${user_name}','${addressUser}','${addressPhone}','${addressPname}','${addressCname}','${addressDname}','${addressPid}','${addressCid}','${addressDid}','${addressStreet}','${addressPostcode}','${isDefault}')`, function(error, results, fields) {
                if (error) throw error;
                res.send(results);
                // connection.end();
            })
        })

        //读取收货地址
        app.get("/getAddr", function(req, res) {
            res.append("Access-Control-Allow-Origin", "*");
            // connection.connect();
            console.log("/getAddr", req.query);
            var user_id = req.query.user_id;
            connection.query(`SELECT * FROM addresslist where user_id="${user_id}"`, function(error, results, fields) {
                if (error) throw error;
                res.send(results);
                // connection.end();
            })
        })

        //修改收货地址
        app.get("/modifyAddr", function(req, res) {
            res.append("Access-Control-Allow-Origin", "*");

            console.log("/modifyAddr", req.query.id);

            var id = req.query.id;
            var address = JSON.parse(req.query.address);
            console.log("/modifyAddr", address);

            var user_id = address.user_id;
            var user_name = address.user_name;
            var addressUser = address.addressUser;
            var addressPhone = address.addressPhone;
            var addressPname = address.addressPname;
            var addressCname = address.addressCname;
            var addressDname = address.addressDname;
            var addressPid = address.addressPid;
            var addressCid = address.addressCid;
            var addressDid = address.addressDid;
            var addressStreet = address.addressStreet;
            var addressPostcode = address.addressPostcode;
            var isDefault = address.isDefault;

            // connection.connect();
            connection.query(`update addresslist set user_id="${user_id}",user_name="${user_name}",addressUser="${addressUser}",addressPhone="${addressPhone}",addressPname="${addressPname}",addressCname="${addressCname}",addressDname="${addressDname}",addressPid="${addressPid}",addressCid="${addressCid}",addressDid="${addressDid}",addressStreet="${addressStreet}",addressPostcode="${addressPostcode}",isDefault="${isDefault}" where id="${id}"`, function(error, results, fields) {
                if (error) throw error;
                res.send(results);
                // connection.end();
            })
        })

        //修改收货地址默认值
        app.get("/ismodifyAddr", function(req, res) {
            res.append("Access-Control-Allow-Origin", "*");
            // connection.connect();
            var id = req.query.id;
            connection.query(`update addresslist set isDefault="0"`, function(error, results, fields) {
                if (error) {
                    throw error
                } else {
                    connection.query(`update addresslist set isDefault="1" where id="${id}"`, function(error, results, fields) {
                        if (error) throw error;
                        res.send(results);
                        // connection.end();
                    })
                };
            })
        })
    })

    //删除收货地址
    app.get("/delAddr", function(req, res) {
        res.append("Access-Control-Allow-Origin", "*");

        console.log("/delAddr", req.query);

        var id = req.query.id;
        // connection.connect();
        connection.query(`delete from addresslist where id="${id}"`, function(error, results, fields) {
            if (error) throw error;
            res.send(results);
            // connection.end();
        })
    })

}
