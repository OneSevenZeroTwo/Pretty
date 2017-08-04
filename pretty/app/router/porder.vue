<template>
	<div>
		<Jcarsheader :thisHeader="jheaderMsg"></Jcarsheader>
		<Jorderaddress></Jorderaddress>
		<Jordercontent></Jordercontent>
	</div>
</template>
<script>
	import Jcarsheader from "../component/jcarsheader.vue";
	import Jorderaddress from "../component/jorderaddress.vue";
	import Jordercontent from "../component/jordercontent.vue";

	export default {
		data(){
 	 		return {
 	 			jheaderMsg:{
 	 				title:"订单确认",
 	 				right_btn:"我的订单",
 	 				href:"#/reg",
 	 			}
 	 		}
		},
		components:{
			Jcarsheader,
			Jorderaddress,
			Jordercontent,
		}
	}
</script>
<style>
	
</style>