<template>
	<div>
		<plist></plist>
		<router-view></router-view>
	</div>
		
</template>

<script >
	import plist from '../../component/plist.vue';
	export default{
		components:{
			plist,
		}
	}
</script>

<style>
	div{
		background: #fff;
	}
</style>