<template>
	<div>
		<xheader></xheader>
		<router-view></router-view>
		<xfooter></xfooter>
	</div>
</template>
<script>
	import xheader from '../component/xheader.vue';
	import xfooter from '../component/xfooter.vue';
	export default{
		components:{
			xheader,
			xfooter
		}
	}
</script>