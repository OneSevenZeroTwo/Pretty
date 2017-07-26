<template>
	<div>
		111111
		<!--<lrHeader :theHeader='headerMsg'></lrHeader>
		<lrInput></lrInput>-->
	</div>
</template>

<script>
	import lrHeader from "../component/l&rheader.vue";
	import lrInput from "../component/l&rinput.vue";
	
	export default {
		data() {
			return {
				headerMsg:{
					title:'注册',
					rightBtn:'首页'
				},
			}
		},
		components: {
			lrHeader,
			lrInput
		}
	}
</script>

<style>
</style>