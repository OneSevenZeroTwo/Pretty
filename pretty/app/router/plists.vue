<template>
	<div>
		<plist></plist>
		<router-view></router-view>
	</div>
</template>

<script>
	import plist from '../component/plist.vue';
	import pseek from '../component/pseek.vue';
	
	export default{
		components:{
			plist,
			pseek,
		}
	}
</script>

<style>
</style>