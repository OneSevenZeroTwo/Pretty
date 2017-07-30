<template>
	<div>
		<Jcarsheader :thisHeader="jheaderMsg"></Jcarsheader>
		<Jaddresscontent></Jaddresscontent>
	</div>
</template>
<script>
	import Jcarsheader from "../component/jcarsheader.vue";
	import Jaddresscontent from "../component/jaddresscontent.vue";

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
			Jaddresscontent,
		}
	}
</script>
<style>
	
</style>