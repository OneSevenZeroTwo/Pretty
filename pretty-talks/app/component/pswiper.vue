<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide><img src="../img/1.jpeg"></swiper-slide>
		<swiper-slide><img src="../img/1.jpeg"></swiper-slide>
		<swiper-slide><img src="../img/1.jpeg"></swiper-slide>
		<swiper-slide><img src="../img/1.jpeg"></swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
		data: function() {
			return {
				swiperOption: {
					paginationClickable: true,
					//					loop:true,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: 2500,
					observer: true,
					autoplayDisableOnInteraction: false
				}
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
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
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