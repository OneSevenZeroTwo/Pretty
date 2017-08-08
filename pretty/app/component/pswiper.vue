<template>
    <!-- <swiper :options="swiperOption" ref="mySwiper">
        slides
        <swiper-slide v-for="(img,index) in imgs" :key="index"><img :src="img.image"></swiper-slide>
        Optional controls
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <div class="banner" >
        <ul v-ban="">
            <li v-for="img in imgs"><img :src="img.image"></li>
        </ul>
        <div class="page">
            <span v-for="img in imgs"></span>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    mounted() {},
    data() {
        return {
            imgs: [{
                image: "https://s11.mogucdn.com/mlcdn/c45406/170802_5ke2dgila372491cel6j52i14bikl_750x390.jpg",
                titel: "盛夏焕新，穿出软萌甜"
            }, {
                image: "https://s2.mogucdn.com/mlcdn/c45406/170731_0d425k89i1bidh7idkj0cfge32040_750x390.jpg",
                titel: "子君同款口红 速抢5元优惠券"
            }, {
                image: "https://s11.mogucdn.com/mlcdn/c45406/170801_2437e9aa5dd30e4dd7ga4fe3hj9c1_750x390.jpg",
                titel: "全网首发NO.31"
            }, {
                image: "https://s2.mogucdn.com/mlcdn/c45406/170731_16i1kd6b78il9d15a060i9bek0l03_750x390.jpg",
                title: "今夏正流行，气质喇叭袖魅力加分"
            }],
        }
    },
    directives: {
        ban: {
            bind(el, binding) {
                var timer;
                setTimeout(function(){
                    var li = el.children;
                    var banner = el.parentElement;
                    var page = el.nextElementSibling.children;
                    el.style.width = (li.length*100)+'%';
                    var idx= 0;
                    page[0].classList.add('active')
                    clearInterval(timer);
                    timer = setInterval(function() {
                        //获取当前的位置left
                        //当个图的动画
                        for(var i=0;i<page.length;i++){
                            page[i].classList.remove('active')
                        }
                        
                        idx++;

                        if (idx >= li.length) {
                            idx = 0;
                        }
                        page[idx].classList.add('active');
                        var target = -idx * banner.offsetWidth;
                        // console.log(target);
                        timer = setInterval(function() {
                            //获取当前位置
                            var left = el.offsetLeft;
                            var speed = (target - left) / 6;
                            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                            //存在正负值，需取绝对值进行判断
                            if (Math.abs(speed) < 2) {
                                clearInterval(timer);
                                speed = 0;
                                left = target;
                            }
                            el.style.left = left + speed + 'px';
                        }, 30)
                    }, 3000)
                },50)
                    
            }
        }
    }

}
</script>
<style scoped="">
.banner {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 195px;
}

.banner ul {
    position: absolute;
    /*width: 400%;*/
    left: 0;
}

.banner li {
    width: 25%;
    float: left;
}

.banner li img {
    width: 100%;
}
.page{
    position: absolute;
    left: 50%;
    bottom: 10px;
    height: 16px;
    margin-top: -4px;
}
.page span{
    width: 10px;
    height: 10px;
    display: inline-block;
    line-height: 16px;
    background: #fff;
    border-radius: 50%;
    margin-left: 10px;
}
.page .active{
    background: #007aff;
}
</style>