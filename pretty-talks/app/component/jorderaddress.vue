<template>
	<section class="address-box" @click="toAddress">
		<b></b>
		<!-- <p class="name">收件人：2313123<i>18811111111</i></p> -->
		<p class="address">请填写收货地址</p>
		<b></b>
		<span class="arrow"></span>
	</section>
</template>

<script>
	export default {
		methods: {
			toAddress() {
				window.location.href = "#/address"
			}
		}
	}
</script>

<style scoped>
	.address-box {
		position: relative;
		padding: 0;
		margin-top: 9px;
		background-color: #fff;
		color: #333;
	}
	
	.address-box,
	.title-box {
		margin-bottom: 9px;
		overflow: hidden;
	}
	
	.address-box b {
		display: block;
		padding-top: 3px;
		background: url(http://s17.mogucdn.com/new1/v1/bmisc/493ac91e1bc3dfa8745e34e7b959295a/183443709419.png) -20px 0 repeat-x;
	}
	
	.address-box .name {
		font-size: 15px;
	}
	
	.address-box .address,
	.address-box .name {
		padding-left: 8%;
		padding-top: 15px;
		line-height: 1.2;
	}
	
	.address-box .name i {
		margin-left: 8%;
	}
	
	.address-box .address {
		background: url(http://s16.mogucdn.com/new1/v1/bmisc/83bd5e329f79263cb20efba2e8b72c30/183544204190.png) 10px 3.5px no-repeat;
		background-size: 3.4%;
		font-size: 13px;
		color: #666;
		padding-bottom: 14px;
		padding-right: 10.66%;
	}
	
	.address-box b {
		display: block;
		padding-top: 3px;
		background: url(http://s17.mogucdn.com/new1/v1/bmisc/493ac91e1bc3dfa8745e34e7b959295a/183443709419.png) -20px 0 repeat-x;
	}
	
	.arrow {
		position: absolute;
		width: 20px;
		height: 20px;
		right: 2.66%;
		top: 50%;
		margin-top: -7.5px;
		background: url(http://s16.mogucdn.com/new1/v1/bmisc/83bd5e329f79263cb20efba2e8b72c30/183544204190.png) 0 -165px no-repeat;
		background-size: 100%;
	}
</style>