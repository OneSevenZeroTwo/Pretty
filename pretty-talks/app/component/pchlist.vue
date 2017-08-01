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
       <!--  <div class="weui-loadmore weui-loadmore_line">
            <span class="weui-loadmore__tips">暂无数据</span>
        </div> -->
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
            isshownone:false,
        }
    },
    computed: {
        sort() {
            return this.$route.params.sort;
        },
        list() {
            return this.$store.state.list
        },
        isshowmore() {
            return this.$store.state.isshowmore
        },
    },
    methods: {
        // 事件莫名失效！！
        loadmore() {
            
            window.addEventListener('scroll', () => {
                if (document.body.offsetHeight - window.scrollY == 667) {
                    this.wasmore = true;
                    this.$ajax.get('http://localhost:999/home', {
                        params: {
                            page: this.$route.params.page++,
                            sort: this.sort
                        }
                    }).then((data) => {
                        this.$store.state.list = this.$store.state.list.concat(data.data.list);
                        this.wasmore = false
                        
                        console.log(data)
                    }).catch((err) => {

                    });
                }
            })

        }
    },
    mounted() {
       this.loadmore()
    }
}
</script>
<style scoped>
.hlist {
    background: #fff;
    margin-bottom: 80px;
}
</style>