<template>
	<div>
		<lrHeader :theHeader='headerMsg'></lrHeader>
		<div id="theCenter">
			<a href=""></a>
		</div>
		<lrInput :theInput='inputMsg'></lrInput>
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
	import lrHeader from "../component/l&rheader.vue";
	import lrInput from "../component/l&rinput.vue";
	
	export default {
		data() {
			return {
				
				headerMsg:{
					title:'登录 - 美丽说',
					rightBtn:'注册',
					theHref:'http://localhost:8080/#/reg/step1',
				},
				inputMsg:{
					title:'美丽说账号登录',
					user:'昵称/邮箱/手机号',
					type:'登录',
					dialogTitle:'登录失败',
					dialogMsg:'请输入正确的账号和密码',
					bool:'true'
				}
			}
		},
		components: {
			lrHeader,
			lrInput
		}
	}
</script>