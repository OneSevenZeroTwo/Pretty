<template>
	<div>
		<lrHeader :theHeader='headerMsg'></lrHeader>
		<router-view></router-view>
	</div>
</template>

<style>
</style>

<script>
	import lrHeader from "../component/l&rheader.vue";

	export default {
		data() {
			return {
				headerMsg:{
					title:'注册',
					rightBtn:'首页'
				}
			}
		},
		components: {
			lrHeader
		}
	}
</script>