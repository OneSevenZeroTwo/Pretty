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
        <ul class="bomove clearfix">
            <li v-for="lia of liactive">
                <a href="#">
					<img :src="lia.image">
					<p class="mo_price">{{lia.discountPrice}} <span class="old_price">{{lia.price}}</span></p>
					<button class="mo_buy">立即抢购</button>
				</a>
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('getActive');
    },
    computed: {
        liactive() {
            return this.$store.state.liactive
        },
        litime(){
        	 return this.$store.state.litime
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