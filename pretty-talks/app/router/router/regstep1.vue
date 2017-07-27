<template>
	<lrInput :theInput='inputMsg'></lrInput>
</template>

<script>
	import lrInput from "../../component/l&rinput.vue";
	
	export default{
		data(){
			return{
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
		components:{
			lrInput
		}
	}
</script>

<style>
</style>