<template>
	<div>
		<Jcarsheader :thisHeader="jheaderMsg"></Jcarsheader>
	</div>
</template>
<script>
	import Jcarsheader from "../component/jcarsheader.vue";

	export default {
		data(){
 	 		return {
 	 			jheaderMsg:{
 	 				title:"收货地址",
 	 				right_btn:"新增",
 	 				href:"#/addaddr",
 	 			}
 	 		}
		},
		components:{
			Jcarsheader,
		}
	}
</script>
<style>
	
</style>