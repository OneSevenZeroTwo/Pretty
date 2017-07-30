new Vue({
    el: "#demo",
    data: {
        page: 1,
        list: [],
        count: [],
        isshowpage: 0,
        type: '',
        findmsg: ''
    },
    methods: {
        getgoods(num) {
            this.isshowpage = num;
            if (this.type == '') {
                axios.get('http://localhost:222/select', {
                        params: {
                            page: this.isshowpage + 1
                        }
                    })
                    .then((response) => {
                        this.list = response.data.list;
                        // console.log(this.list)
                    })
                    .catch(function(error) {
                        // console.log(error);
                    })
            } else {
                var self = this;
                // this.list = [];
                axios.get('http://localhost:222/type', {
                        params: {
                            page: this.isshowpage + 1,
                            sort: this.type
                        }
                    })
                    .then(function(response) {
                        self.list = response.data.list;

                    }).catch(function(error) {
                        // console.log(error);
                    });
            }


        },
        getCount() {
            if (this.type == '') {
                axios.get('http://localhost:222/allcount')
                    .then((response) => {

                        var cou = Math.ceil(response.data[0]['count(*)'] / 10);
                        this.count = [];
                        for (var i = 0; i <= cou; i++) {
                            this.count.push(i);

                        }
                        // console.log(this.count)

                    })
                    .catch(function(error) {
                        // console.log(error);
                    });
            } else if(this.type != ''){
                axios.get('http://localhost:222/count', {
                        params: {
                            sort: this.type
                        }
                    })
                    .then((response) => {
                        // console.log(response)
                        var cou = Math.ceil(response.data[0]['count(*)'] / 10);
                        this.count = [];
                        for (var i = 0; i <= cou; i++) {
                            this.count.push(i);

                        }

                    })
                    .catch(function(error) {
                        // console.log(error);
                    });
            }
            if(this.findmsg != ''){
                axios.get('http://localhost:222/seacount', {
                        params: {
                            title: this.findmsg
                        }
                    })
                    .then((response) => {
                        // console.log(response)
                        var cou = Math.ceil(response.data[0]['COUNT(*)'] / 10);
                        this.count = [];
                        for (var i = 0; i <= cou; i++) {
                            this.count.push(i);

                        }

                    })
                    .catch(function(error) {
                        // console.log(error);
                    });
            }

        },
        dellist(id) {
            axios.get('http://localhost:222/del', {
                    params: {
                        id: id
                    }
                })
                .then((response) => {
                    alert('成功删除数据')

                })
                .catch(function(error) {
                    // console.log(error);
                });
        },
        showtype() {
            if (this.type == '') {
                axios.get('http://localhost:222/select', {
                        params: {
                            page: 1
                        }
                    })
                    .then((response) => {
                        this.list = response.data.list;
                        this.getCount()
                        // console.log(this.list)
                    })
                    .catch(function(error) {
                        // console.log(error);
                    })
            } else {
                var self = this;
                // this.list = [];
                axios.get('http://localhost:222/type', {
                        params: {
                            page: 1,
                            sort: this.type
                        }
                    })
                    .then(function(response) {
                        self.list = response.data.list;

                        self.getCount()

                    }).catch(function(error) {
                        // console.log(error);
                    });
            }
            if (this.findmsg != '') {
                axios.get('http://localhost:222/seek', {
                        params: {
                            title: this.findmsg
                        }
                    })
                    .then((response) => {
                        // console.log(response)
                        this.list = response.data.list;
                        this.getCount()
                        // console.log(this.list)
                    })
                    .catch(function(error) {
                        // console.log(error);
                    })
            }

        },
    },
    mounted() {
        this.getgoods(0);
        this.getCount();
    },
    updated() {},
    directives: {
        del: {
            bind(el, binding) {
                setTimeout(function() {
                    var deltr = el.parentNode.parentNode.parentNode.parentNode;
                    el.addEventListener('click', function() {
                        deltr.parentNode.removeChild(deltr)
                    })

                }, 30)
            }
        }
    }
})