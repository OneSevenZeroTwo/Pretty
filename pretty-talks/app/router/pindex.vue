<template>
<<<<<<< HEAD
	<router-view></router-view>
</template>
=======
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
>>>>>>> 97344bd4822ac3a4da2fb55a01c4247b7f6fbd95
