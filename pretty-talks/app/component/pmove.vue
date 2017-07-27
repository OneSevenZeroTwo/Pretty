<!--方形移动-->
<template>
    <div class="move">
        <div class="mo_content">
            <p class="mo_con">-- 限时特惠距活动结束仅剩 --</p>
            <div class="mo_time">
                <span class="time time1">0</span>
                <span class="time time2">1</span>
                <span class="time3">时</span>
                <span class="time time4">2</span>
                <span class="time time5">3</span>
                <span class="time6">分</span>
                <span class="time time7">4</span>
                <span class="time time8">3</span>
                <span class="time9">秒</span>
                <span class="time time10">4</span>
                <span class="time time11">6</span>
            </div>
        </div>
        <div class="fmove">
            <ul class="bomove clearfix" v-shift="">
                <li v-for="lia of liactive">
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
	data(){
		return {
			acolor:'red'
		}
	},
    mounted() {
        this.$store.dispatch('getActive');
    },
    computed: {
        liactive() {
            return this.$store.state.liactive
        },
        litime() {
            return this.$store.state.litime
        }
    },
    directives: {
        shift: {
            bind(el, binding) {
            	var start = null;
            	var end = null;
            	var ways = null;
            	var res = null
            	var width = 100*10;
            	el.style.width = width + 'px';
                el.ontouchstart = function(data1) {
                	start = data1.changedTouches['0'].pageX;
                	this.ontouchmove = function(data2){
                		console.log('sa')
                		end = data2.changedTouches['0'].pageX;
                		if(end<start){
                			ways = this.style.left.slice(0,-2);
                			res = ways*1+(end-start);
                			// console.log(document.body.offsetWidth-width,res)
                			if(document.body.offsetWidth-width >=res ){
                				res = document.body.offsetWidth-width
                			}
                			
                			this.style.left =  res +'px'
                		}else{
                			ways = this.style.left.slice(0,-2);
                			res = ways*1 + (end-start);
                			if(res >= 0){
                				res = 0
                			}
                			this.style.left = res + 'px'
                		}
                		
                	}
                }

                // }
            }
        }
    }
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
	width: 1000px;
    position: absolute;
    /*top:10px;*/
    left: /0;
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