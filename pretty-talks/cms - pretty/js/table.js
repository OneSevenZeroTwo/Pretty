new Vue({
    el: "#demo",
    data: {
        page: 1,
        list: [],
        count: [],
        isshowpage: 0
    },
    methods: {
        getgoods(num) {
            this.isshowpage = num;
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
                    console.log(error);
                })

        },
        getCount() {
            axios.get('http://localhost:222/allcount')
                .then((response) => {
                    var cou = Math.ceil(response.data[0]['count(*)'] / 10);
                    for (var i = 0; i < cou; i++) {
                        this.count.push(i);

                    }
                    console.log(this.count)

                })
                .catch(function(error) {
                    console.log(error);
                });
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
                    console.log(error);
                });
        }
    },
    mounted() {
        this.getgoods(0);
        this.getCount()
    },
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