<template>
	<div  id="thebody">
		<lrHeader :theHeader='headerMsg'></lrHeader>
		<router-view></router-view>
	</div>
</template>

<style>
	#thebody{
		background-color: #fff;
	}
</style>

<script>
	import lrHeader from "../component/l&rheader.vue";

	export default {
		data() {
			return {
				headerMsg:{
					title:'注册',
					rightBtn:'首页',
					car:'false',
					theHref:'#/'
				}
			}
		},
		components: {
			lrHeader
		}
	}
</script>