<template>
	<div>
		<Jorderheader></Jorderheader>
		<Jorderaddress></Jorderaddress>
		<Jordercontent></Jordercontent>
	</div>
</template>
<script>
	import Jorderheader from "../component/jorderheader.vue";
	import Jorderaddress from "../component/jorderaddress.vue";
	import Jordercontent from "../component/jordercontent.vue";

	export default {
		components:{
			Jorderheader,
			Jorderaddress,
			Jordercontent,
		}
	}
</script>
<style>
	
</style>