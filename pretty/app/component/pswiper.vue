<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(img,index) in imgs" :key="index"><img :src="img.image"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    mounted() {
        this.$store.dispatch('getActive');
    },
    data() {
        return {
            swiperOption: {
                paginationClickable: true,
                //					loop:true,
                spaceBetween: 30,
                pagination: '.swiper-pagination',
                centeredSlides: true,
                autoplay: 3000,
                observer: true,
                autoplayDisableOnInteraction: false
            },
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
    components: {
        swiper,
        swiperSlide
    },

}
</script>
<style scoped="">
.swiper-container {
    width: 100%;
    height: 203px;
    display: flex;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex:1;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    width: 100%;
}
</style>
