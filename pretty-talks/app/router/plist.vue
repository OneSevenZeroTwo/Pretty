<template>
	<div>
		<xseek></xseek>
		<router-view></router-view>
	</div>
</template>

<script>
	import xseek from '../component/xseek.vue';
	
	export default{
		components:{
			xseek,
		}
	}
</script>

<style>
</style>