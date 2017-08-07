<!--方形移动-->
<template>
    <div class="move">
        <div class="mo_content">
            <p class="mo_con">-- 限时特惠距活动结束仅剩 --</p>
            <div class="mo_time" v-time="time">
                <span class="time time1">0</span>
                <span class="time time2">0</span>
                <span class="time3">时</span>
                <span class="time time4">2</span>
                <span class="time time5">3</span>
                <span class="time6">分</span>
                <span class="time time7">4</span>
                <span class="time time8">3</span>
                <span class="time9">秒</span>
                <span class="time time10">4</span>
                <span class="time time11">1</span>
            </div>
        </div>
        <div class="fmove">
            <ul class="bomove clearfix" v-shift="">
                <li v-for="(lia,index) of liactive" :key="index">
                    <a href="javascript:;">
						<img :src="lia.image">
						<p class="mo_price">{{lia.discountPrice}} <span class="old_price">{{lia.price}}</span></p>
						<button class="mo_buy">立即抢购</button>
					</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            acolor: 'red',
        }
    },
    computed: {
        liactive() {
            return this.$store.state.liactive
        },
        time() {
            var time = new Date();
            return time = time.setHours(time.getHours() + 5);
        }
    },
    methods: {
        showTime() {}
    },
    mounted() {
        this.$store.dispatch('getActive');
    },
    directives: {
        shift: {
            bind(el, binding) {
                var ways = null;
                var timer;
                var width = 100 * 10;
                el.style.width = width + 'px';
                el.addEventListener("touchstart", function(data1, eve) {
                    var start = data1.changedTouches['0'].pageX;
                    var left = this.offsetLeft
                    this.addEventListener("touchmove", function(data2) {
                            
                        // 移动的位置
                        var end = data2.changedTouches['0'].pageX;
                        // 需要移动的距离
                        var way = left + (end-start)
                        if(way <= document.body.offsetWidth - width){
                            way = document.body.offsetWidth - width
                        }
                        if(way>=0){
                            way = 0
                        }
                        this.style.left = way +'px'
                    })
                });
            }
        },
        //抢购活动时间
        time: {
            bind(el, binding) {
                var actime = binding.value;
                var tlist = el.querySelectorAll('.time');
                var ss = 1;
                var timer = setInterval(function() {
                    var now = Date.parse(new Date());
                    // 小时
                    var hour = Math.floor((actime - now)/1000/60/60%60) + '';
                    if (hour.length == 1) {
                        hour = '0' + hour
                    }
                    // 分钟
                    var min = Math.floor((actime - now)/1000/60%60) + '';
                    if(min.length == 1){
                    	min = '0'+min
                    }
                    // 秒
                    var se = Math.floor((actime - now)/1000%60) + '';
                    if(se.length == 1){
                    	se = '0'+se
                    }
                   
                    // 毫秒
                    ss++;
                    if(ss==100){
                    	ss=1;
                    }
                    ss = ss+'';
                    if(ss.length == 1){
                    	ss = '0'+ss
                    }


                    tlist[0].innerHTML = hour[0];
                    tlist[1].innerHTML = hour[1];
                    tlist[2].innerHTML = min[0];
                    tlist[3].innerHTML = min[1];
                    tlist[4].innerHTML = se[0];
                    tlist[5].innerHTML = se[1];
                    tlist[6].innerHTML = ss[0];
                    tlist[7].innerHTML = ss[1];
                }, 10)
            }
        }
    },
}
</script>
<style scoped>
.move {
    width: 100%;
    background: #fff;
    margin-top: 10px;
    padding-top: 10px;
}

.move .fmove {
    height: 230px;
    position: relative;
}

.bomove {
    position: absolute;
    height: 100%;
    left: 0;
}

.move div {
    height: 54px;
    text-align: center;
    margin-top: 10px;
}

span {
    font-size: 14px;
}

.move div .time {
    display: inline-block;
    width: 14px;
    height: 18px;
    background: #000;
    color: #fff;
    line-height: 18px;
}
</style>