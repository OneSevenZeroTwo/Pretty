<template>
	<div>
		<xheader></xheader>
		<xfooter></xfooter>
		<xcategary></xcategary>
		<!--<router-view></router-view>-->
	</div>
</template>
<script>
	import xheader from "../../component/xheader.vue";
	import xfooter from "../../component/xfooter.vue";
	import xcategary from "../../component/xcategary.vue";
	
	export default{
		 components:{
		 	   xheader,
		 	   xfooter,
		 	   xcategary,
		 }
	}
</script>
