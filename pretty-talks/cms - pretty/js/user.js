new Vue({
    el: "#demo",
    data: {
        pid: '',
        fcid: '',
        iid: '',
        image: '',
        title: '',
        hot: '',
        cfav: '',
        sort: '',
        buyCount: '',
        city: '',
        price: ''
    },

    methods: {
        setgoods() {
            var type = location.search.slice(1).split('&');
            if (type[0] == 'edit=1') {
                axios.get('http://localhost:222/add', {
                        params: {
                            pid: this.pid,
                            fcid: this.fcid,
                            iid: this.iid,
                            image: this.image,
                            title: this.title,
                            hot: this.hot,
                            cfav: this.cfav,
                            sort: this.sort,
                            buyCount: this.buyCount,
                            city: this.city,
                            price: this.price
                        }
                    })
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            } else if (type[0] == 'edit=2') {
                var id = location.search.slice(11);
                console.log(id)
                axios.get('http://localhost:222/change', {
                        params: {
                            id: id,
                            pid: this.pid,
                            fcid: this.fcid,
                            iid: this.iid,
                            image: this.image,
                            title: this.title,
                            hot: this.hot,
                            cfav: this.cfav,
                            sort: this.sort,
                            buyCount: this.buyCount,
                            city: this.city,
                            price: this.price
                        }
                    })
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        pullmsg() {
            var type = location.search.slice(1).split('&');
            // console.log(location.search)
            if (type[0] == 'edit=2') {
                var id = location.search.slice(11)
                var self = this
                // 增加的时候
                axios.get('http://localhost:222/check', {
                        params: {
                            id: id
                        }
                    }).then(function(response) {
                        var tmsg = response.data.list[0];
                        self.pid = tmsg.pid,
                            self.fcid = tmsg.fcid,
                            self.iid = tmsg.iid,
                            self.image = tmsg.image,
                            self.title = tmsg.title,
                            self.hot = tmsg.hot,
                            self.cfav = tmsg.cfav,
                            self.sort = tmsg.sort,
                            self.buyCount = tmsg.buyCount,
                            self.city = tmsg.city,
                            self.price = tmsg.price;
                        console.log()
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        lu() {
            var type = location.search.slice(1).split('&');
            // console.log(location.search)
            if (type[0] == 'edit=1') {
                var id = location.search.slice(11)
                var self = this
                // 增加的时候
                axios.get('http://localhost:222/lu', {
                        params: {
                            iid: '1kd5bcu'
                        }
                    }).then(function(response) {
                        var res = response.data.result;
                        console.log(res.itemInfo.extra)
                        self.title = res.itemInfo.title;
                        self.iid = res.itemInfo.iid;
                        self.price = res.itemInfo.price;
                        // self.city = res.itemInfo.extra.sendAddress;
                        self.cfav = res.columns[1];
                        self.buyCount = res.columns[0];
                        self.image = res.itemInfo.topImages[0]
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    },
    mounted() {
        this.pullmsg()
        // this.lu()
    }

})