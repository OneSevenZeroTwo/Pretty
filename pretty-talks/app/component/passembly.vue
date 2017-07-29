<!--组合-->
<template>
    <div class="assembly move">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170523_3588j3005fhc2d8f1icgijbgg23gk_740x128.jpg_750x999.v1c7E.70.webp" class="as_hea">
        <div class="assembly1">
            <img class="big_img" :src="well1Img">
            <div class="fmove">
                <ul class="bomove clearfix" v-shift="">
                    <li v-for="a1 in aswell1">
                        <a href="javascript:;">
                        <img :src="a1.image">
                        <p class="astitle">{{a1.title}}</p>
                        <p class="mo_price">{{a1.price}}</p>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="assembly2">
            <img class="big_img" :src="well2Img" >
            <div class="fmove">
                <ul class="bomove clearfix" v-shift="">
                    <li v-for="a2 in aswell2">
                        <a href="javascript:;">
                        <img :src="a2.image">
                         <p class="astitle">{{a2.title}}</p>
                        <p class="mo_price">{{a2.price}}</p>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="assembly3">
            <img class="big_img" :src="well3Img" >
            <div class="fmove">
                <ul class="bomove clearfix" v-shift="">
                    <li v-for="a3 in aswell3">
                        <a href="javascript:;">
                        <img :src="a3.image">
                        <p class="astitle">{{a3.title}}</p>
                        <p class="mo_price">{{a3.price}}</p>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="asmore">
            <a href="#">加载更多 ＞</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            aswell1: null,
            aswell2: null,
            aswell3: null,
            well1Img: null,
            well2Img: null,
            well3Img: null,
        }
    },
    methods: {
        getWell() {
            // console.log(this)
            this.$ajax.get('http://localhost:999/well').then((data) => {
                this.well1Img = data.data.data['0'].image;
                this.well2Img = data.data.data['1'].image;
                this.well3Img = data.data.data['2'].image;
                this.aswell1 = data.data.data['0'].goodsList;
                this.aswell2 = data.data.data['1'].goodsList;
                this.aswell3 = data.data.data['2'].goodsList;
            }).catch((err) => {

            })
        }
    },
    mounted() {
        this.getWell()
    },
    directives: {
        // shift有点蠢，反应迟钝！！！
        shift: {
            bind(el, binding) {
                var start = null;
                var end = null;
                var ways = null;
                var res = null;
                var timer;
                var width = 100 * 16;
                el.style.width = width + 'px';
                el.addEventListener("touchstart", function(data1, eve) {
                    start = data1.changedTouches['0'].pageX;
                    this.addEventListener("touchmove", function(data2) {

                        end = data2.changedTouches['0'].pageX;
                        var speed = 10;

                        if (end < start) {
                            clearInterval(this.timer);
                            var first = this.offsetLeft
                            this.timer = setInterval(() => {
                                // 实时需要移动的距离
                                ways = this.offsetLeft
                                ways -= speed;
                                res = end - start;
                                // clearInterval(this.timer)
                                // 实时获取当前的位置


                                if (ways <= document.body.offsetWidth - width) {
                                    clearInterval(this.timer);
                                    ways = document.body.offsetWidth - width;
                                }
                                if (ways <= res + first) {
                                    clearInterval(this.timer);
                                    ways = res + first;

                                }
                                this.style.left = ways + 'px'
                            }, 10)

                        } else if (end > start) {
                            clearInterval(this.timer);
                            var first = this.offsetLeft;
                            this.timer = setInterval(() => {
                                // 实时需要移动的距离
                                ways = this.offsetLeft;
                                ways += speed;
                                res = end - start;
                                // clearInterval(this.timer)
                                // 实时获取当前的位置
                                if (ways >= 0) {
                                    clearInterval(this.timer);
                                    ways = 0;
                                }
                                if (ways >= res + first) {
                                    clearInterval(this.timer);
                                    ways = res + first;

                                }
                                this.style.left = ways + 'px'
                            }, 10)
                        }

                    })
                });
            }
        }
    },
}
</script>
<style scoped>
.assembly div {
    background: #fff;
}

.assembly2,
.assembly3 {
    margin-top: 10px;
}

.big_img {
    height: 215px;
}

.as_hea {
    height: 65px;
}

p {
    color: #f36;
}

.asmore {
    border-top: 1px solid #eee;
    height: 44px;
    line-height: 44px;
    text-align: center;
}

.asmore a {
    color: #f36;
    font-size: 12px;
}

.bomove {
    width: 450%;
}

.astitle {
    font-size: 12px;
    color: #333;
    height: 14px;
    line-height: 14px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
}
</style>