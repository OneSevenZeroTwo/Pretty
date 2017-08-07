<!--首页商品列表-->
<template>
    <div :class="{list:!isontop,listTop:isontop}">
        <ul class="lnav clearfix">
            <li @click="shownav(0,'pop')">
                <a href="javascript:;"><span :class="{active:isshownav==0}" >流行</span></a>
            </li>
            <li @click="shownav(1,'sell')">
                <a :href="h2"><span :class="{active:isshownav==1}">新款</span></a>
            </li>
            <li @click="shownav(2,'new')">
                <a :href="h3"><span :class="{active:isshownav==2}">精选</span></a>
            </li>
        </ul>
    </div>
</template>
<!-- #/index/home/list/pop/1 -->
<!-- #/index/home/list/sell/1 -->
<!-- #/index/home/list/new/1 -->
<script>
export default {
    // sort:pop sell new
    data() {
        return {
            isshownav: 0,
            isontop: false,
            h1: '',
            h2: '',
            h3: '',
        }
    },
    computed: {
			yang(){
				console.log(this.$store.state.choose)
				return this.$store.state.choose;
			},
		},
    methods: {
        shownav(num,sort) {
            this.isshownav = num;
            this.$store.state.list = [];
            this.$store.state.choose = [];
         
            if(this.$route.matched[1].path == "/listed/doing/:sort/:page/:pcid"){
				 this.$ajax.get(this.$store.state.baseUrl + 'goodlist.json').then((data) => {
                    var all = data.data.RECORDS
                      
                    var arr = []
                    for (var i = 0; i < all.length; i++) {
                        if (all[i].sort == sort) {
                            arr.push(all[i])
                        }
                    }
//                  console.log(this.$store.state.list)
                    this.$store.state.choose = this.$store.state.choose.concat(arr);
                }).catch((err) => {
                });
            	this.h1 = '#/listed/doing/pop/1/'+ this.$route.params.pcid;
                this.h2 = '#/listed/doing/sell/1/'+ this.$route.params.pcid;
                this.h3 = '#/listed/doing/new/1/'+ this.$route.params.pcid; 
            } else if (this.$route.matched[2].path == "/index/filist/pseek/:sort/:page/:title") {
                this.$ajax.get('http://localhost:999/liseek', {
                    params: {
                        page: 1,
                        sort: sort,
                        title: this.$route.params.title
                    }
                }).then((data) => {
                    this.$store.state.list = this.$store.state.list.concat(data.data.list);
                }).catch((err) => {

                });
                this.h1 = '#/index/filist/pseek/pop/1/' + this.$route.params.title;
                this.h2 = '#/index/filist/pseek/sell/1/' + this.$route.params.title;
                this.h3 = '#/index/filist/pseek/new/1/' + this.$route.params.title;
            }else if (this.$route.matched[2].path == "/index/home/list/:sort/:page") {
                this.h1 = '#/index/home/list/pop/1';
                this.h2 = '#/index/home/list/sell/1';
                this.h3 = '#/index/home/list/new/1';
            }
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
        // console.log(this.$route)
        this.onTop();
        if (this.$route.matched[2].path == "/index/home/list/:sort/:page") {
            if (this.$route.path == '/index/filist/pseek/pop/1') {
                this.isshownav = 0;
            } else if (this.$route.path == '/index/home/list/sell/1') {
                this.isshownav = 1;
            } else if (this.$route.path == '/index/home/list/new/1') {
                this.isshownav = 2;
            }
        } else if (this.$route.matched[2].path == "/index/filist/pseek/:sort/:page/:title") {
            // 正则表达式
            if (this.$route.path == '/index/filist/pseek/pop/1/' + this.$route.params.title) {
                this.isshownav = 0;
            } else if (this.$route.path == '/index/filist/pseek/sell/1/' + this.$route.params.title) {
                this.isshownav = 1;
            } else if (this.$route.path == '/index/filist/pseek/new/1/' + this.$route.params.title) {
                this.isshownav = 2;
            }
      }
      this.$store.dispatch("setChoose")

    }

}
</script>
<style>
html,body{
	background: #fff;
}
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