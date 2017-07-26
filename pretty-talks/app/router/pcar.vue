<template>
	<div>
		<Jheader></Jheader>
		<Jcarcontent></Jcarcontent>
		<xfooter></xfooter>
	</div>
</template>
<script>
	import Jheader from "../component/jcarheader.vue";
	import Jcarcontent from "../component/jcarcontent.vue";
	import xfooter from "../component/xfooter.vue";
	
	export default {
		components:{
			Jheader,
			Jcarcontent,
			xfooter
		}
	}
</script>
<style>
	
</style>