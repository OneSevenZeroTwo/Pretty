<template>
	<div>
		<lrHeader :theHeader='headerMsg'></lrHeader>
		<div id="theCenter">
			<a href=""></a>
		</div>
		<lrInput></lrInput>
	</div>
</template>
<style scoped>
	#theCenter {
		padding: 35px 15px 0 15px;
	}
	
	#theCenter a {
		display: block;
		height: 105px;
		width: 105px;
		margin: 0 auto;
		background: url(../../images/login&reg&mine/qq.png);
		background-size: 100%;
	}
</style>

<script>
	import lrHeader from "../components/l&rheader.vue";
	import lrInput from "../components/l&rinput.vue";
	
	export default {
		data() {
			return {
				headerMsg:{
					title:'登录 - 美丽说',
					rightBtn:'注册'
				},
			}
		},
		props:['theHeader'],
		components: {
			lrHeader,
			lrInput
		}
	}
</script>