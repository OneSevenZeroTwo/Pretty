<template>
	<div>
		<!-- <Jcarsheader :thisHeader="jheaderMsg"></Jcarsheader> -->
		<Jaddaddrcont></Jaddaddrcont>
	</div>
</template>
<script>
	// import Jcarsheader from "../component/jcarsheader.vue";
	import Jaddaddrcont from "../component/jaddaddrcont.vue";

	export default {
		data(){
 	 		return {
 	 			/*jheaderMsg:{
 	 				title:"收货地址",
 	 				right_btn:"保存",
 	 				id:"save_address",
 	 				href:"javascript:;",
 	 				click:"save",
 	 			}*/
 	 		}
		},
		components:{
			// Jcarsheader,
			Jaddaddrcont,
		}
	}
</script>
<style>
	
</style>