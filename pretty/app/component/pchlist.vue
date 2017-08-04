<template>
    <div class="hlist">
        <ul class="list_ch clearfix">
            <li v-for="(lis,index) in list" :key="index">
                <a :href="'#/detail/'+lis.iid">
                    <img :src="lis.image">
                    <p class="li_title">{{lis.title}}</p>
                    <p class="mo_price">{{lis.price}}<span class=" collect"></span><span class="count">{{lis.cfav}}</span></p>
                </a>
            </li>
        </ul>
        <!-- 加载更多 -->
        <div class="weui-loadmore" v-show="isshowmore || wasmore">
            <i class="weui-loading"></i>
            <span class="weui-loadmore__tips">正在加载</span>
        </div>
         <div class="weui-loadmore weui-loadmore_line" v-show="isnone">
            <span class="weui-loadmore__tips">暂无数据</span>
        </div>
    </div>
</template>
<script>
// 解决刷新问题
export default {
    // sort:pop sell new
    data() {
        return {
            isshownav: 0,
            wasmore: null,
            isshownone: false,
            page: 0,
            isnone:false
        }
    },
    computed: {
        sort() {
            return this.$route.params.sort;
        },
        list() {
            return this.$store.state.list;
        },
        isshowmore() {
            return this.$store.state.isshowmore;
        },
    },
    methods: {
        // 事件莫名失效！！
        loadmore() {

            window.addEventListener('scroll', () => {
                if (document.body.offsetHeight - window.scrollY == 667) {
                    this.wasmore = true;
                    this.$ajax.get(this.$store.state.baseUrl + 'goodlist.json').then((data) => {
                        var all = data.data.RECORDS;
                        var arr = [];
                        if (this.$route.matched[2].path == "/index/home/list/:sort/:page") {
                            for (var i = 0; i < all.length; i++) {
                                if (all[i].sort == this.$route.params.sort) {
                                    arr.push(all[i])
                                }
                            }

                        } else if (this.$route.matched[2].path == "/index/filist/pseek/:sort/:page/:title") {
                             for (var i = 0; i < all.length; i++) {
                                if (all[i].sort == this.$route.params.sort && all[i].title.includes(this.$route.params.title)) {
                                    // console.log(all[i])
                                    arr.push(all[i])
                                }
                            }
                        }
                        var start = this.page * 10;
                        var end = start + 10;
                        this.page++;
                        // console.log(end,arr.length)
                        if(end<arr.length){
                            this.$store.state.list = this.$store.state.list.concat(arr.slice(start, end))
                        }else{
                            this.wasmore = false;
                            this.isnone = true
                        }
                        // console.log(arr(start,end))

                    }).catch((err) => {

                    });
                }
            })

        },
        liseek() {
            this.wasmore = true;
            this.$ajax.get(this.$store.state.baseUrl + 'goodlist.json').then((data) => {
                this.$store.state.list = this.$store.state.list.concat(data.data.RECORDS);
                this.wasmore = false

            }).catch((err) => {

            });
        }

    },
    mounted() {
        this.loadmore()
        // if (this.$route.matched[2].path == "/index/filist/pseek/:sort/:page/:title") {
        //     this.liseek();
        // }
        // console.log(document.body.offsetHeight)
    },
}
</script>
<style scoped>
.hlist {
    background: #fff;
    margin-bottom: 80px;
}

.hlist li {
    height: 300px;
}
</style>