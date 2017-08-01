<!--首页商品列表-->
<template>
    <div :class="{list:!isontop,listTop:isontop}">
        <ul class="lnav clearfix">
            <li @click="shownav(0)">
                <a href="#/index/home/list/pop/1"><span :class="{active:isshownav==0}" >流行</span></a>
            </li>
            <li @click="shownav(1)">
                <a href="#/index/home/list/sell/1"><span :class="{active:isshownav==1}">新款</span></a>
            </li>
            <li @click="shownav(2)">
                <a href="#/index/home/list/new/1"><span :class="{active:isshownav==2}">精选</span></a>
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
            isontop: false,
        }
    },
    methods: {
        shownav(num) {
            this.isshownav = num;
            this.$store.state.list = [];
        },
        onTop() {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 2567) {
                    this.isontop = true;
                } else {
                    this.isontop = false;
                }
            })
        }

    },
    mounted() {
        this.onTop();
        if (this.$route.path == '/index/home/list/pop/1') {
            this.isshownav = 0;
        } else if (this.$route.path == '/index/home/list/sell/1') {
            this.isshownav = 1;
        } else if (this.$route.path == '/index/home/list/new/1') {
            this.isshownav = 2;
        }
    }

}
</script>
<style>
.list {

    background: #fff;
    margin-top: 10px;
}

.listTop {
    background: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    margin-top: 0;
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