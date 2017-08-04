new Vue({
    el: "#demo",
    data: {
        pid: '23023',
        fcid: '10057092',
        iid: '',
        image: '',
        title: '',
        hot: '0',
        cfav: '',
        sort: 'sell',
        buyCount: '',
        city: '',
        price: '',
        imgAll: '',
        carousel: '',
        bigAll: [],
        i:7
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
                            price: this.price,
                            carousel: this.carousel,
                            imgAll: this.imgAll
                        }
                    })
                    .then((response)=> {
                        console.log(response);
                        this.i++
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
                            price: this.price,
                            carousel: this.carousel,
                            imgAll: this.imgAll
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
                        self.pid = tmsg.pid;
                        self.fcid = tmsg.fcid;
                        self.iid = tmsg.iid;
                        self.image = tmsg.image;
                        self.title = tmsg.title;
                        self.hot = tmsg.hot;
                        self.cfav = tmsg.cfav;
                        self.sort = tmsg.sort;
                        self.buyCount = tmsg.buyCount;
                        self.city = tmsg.city;
                        self.price = tmsg.price;
                        self.carousel = this.carousel;
                        self.imgAll = this.imgAll;
                        console.log()
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        lu() {
            var type = location.search.slice(1).split('&');
            // console.log(this.bigAll)
            if (type[0] == 'edit=1') {
                var id = location.search.slice(11)
                var self = this
                var o = ["1kgnr7u", "1kgd3qi", "1kg8op8", "1keyxy8", "1keyhzo", "1kf2z6u", "1kfb0li", "1kfo9ac", "1kdtt2u", "1kdsl2e", "1kdeo3q", "1keed0s"]
                // 增加的时候
                axios.get('http://localhost:222/lu', {
                        params: {
                            iid: o[0],
                            
                        }
                    }).then(function(response) {
                        var res = response.data.result;
                        var imgall = '';
                        var aa = '';
                        imgall += res.detailInfo.detailImage['0'].list.map(function(item) {
                            return item
                        });
                        aa += res.itemInfo.topImages.map(function(item) {
                            return item
                        })
                        console.log(res, response, imgall, self.bigAll.length)
                        self.title = res.itemInfo.title;
                        self.iid = res.itemInfo.iid;
                        self.price = res.itemInfo.price;
                        self.city = '浙江 杭州'
                        self.cfav = res.columns[1];
                        self.buyCount = res.columns[0].slice(2);
                        self.image = res.itemInfo.topImages[0];
                        self.carousel = aa;
                        self.imgAll = imgall;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }

        }
    },
    mounted() {
        this.pullmsg()

        axios.get('http://localhost:222/aa', {
                params: {
                    fcid: this.fcid,
                    sort: this.sort
                }
            })
            .then((response) => {
                var arr = response.data.data.list;
                var string = '';
                string += arr.map(function(item) {
                    return item.iid
                })
                this.bigAll = string.split(',');
                // console.log(string.split(','), string, response)
                this.lu()
            })
            .catch(function(error) {
                console.log(error);
            });
    }

})
