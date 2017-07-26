<template>
	<div>
		<lrHeader :theHeader='headerMsg'></lrHeader>
		<lrInput :theInput='inputMsg'></lrInput>
	</div>
</template>

<style>
</style>

<script>
	import lrHeader from "../component/l&rheader.vue";
	import lrInput from "../component/l&rinput.vue";	
	
	export default {
		data() {
			return {
				headerMsg:{
					title:'注册',
					rightBtn:'首页'
				},
				inputMsg:{
					title:'美丽说账号注册',
					user:'手机号:+86',
					type:'注册',
					dialogTitle:'注册失败',
					dialogMsg:'该手机号已注册',
					bool:'false'
				}
			}
		},
		components: {
			lrHeader,
			lrInput
		}
	}
</script>