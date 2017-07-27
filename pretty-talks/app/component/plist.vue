<!--首页商品列表-->
<template>
    <div class="list">
        <ul class="lnav clearfix">
            <li @click="shownav(0)">
                <a href="#/index/home/list/pop"><span :class="{active:isshownav==0}" >流行</span></a>
            </li>
            <li @click="shownav(1)">
                <a href="#/index/home/list/sell" ><span :class="{active:isshownav==1}">新款</span></a>
            </li>
            <li @click="shownav(2)">
                <a href="#/index/home/list/new"><span :class="{active:isshownav==2}">精选</span></a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    // sort:pop sell new
    data() {
        return {
            isshownav: 0,
        }
    },
    methods: {
        shownav(num) {
            this.isshownav = num;
            this.$store.state.list = [];
            this.$store.state.page = 0;
            if (this.$route.path == '/index/home/list/pop') {
                this.isshownav = 0;
                this.$store.state.sort = 'pop';
                this.$store.dispatch('getList');
            } else if (this.$route.path == '/index/home/list/sell') {
                this.isshownav = 1;
                this.$store.state.sort = 'sell';
                this.$store.dispatch('getList');
            } else if (this.$route.path == '/index/home/list/new') {
                this.isshownav = 2;
                this.$store.state.sort = 'new';
                this.$store.dispatch('getList');
            }
            
           
        }
    },
    mounted() {
       this.$store.dispatch('getList');
    }
}
</script>
<style>
.list {
    background: #fff;
    margin-top: 10px;
}

.lnav li {
    float: left;
    width: 32%;
    margin: 0;
}

.lnav li a {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}

.active {
    display: inline-block;
    color: #FF3366;
    border-bottom: 2px solid #FF3366;
    height: 34px;
    font-size: 14px;
}

.list_ch li {
    float: left;
    width: 45%;
    margin-left: 12px;
}

.list_ch li img {
    width: 100%;
    height: 237px;
}

.list_ch li .li_title {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
}

.collect {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(../img/star1.png);
    margin: 0 18px 0 8px;
    position: relative;
    top: 4px;
}

.count {
    color: #ccc;
}
</style>