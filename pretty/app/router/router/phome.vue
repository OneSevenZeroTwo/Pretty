<template>
    <div class="home">
    	<psearch></psearch>
    	<pswiper></pswiper>
    	<pclient></pclient>
    	<pmove></pmove>
    	<pclientfas></pclientfas>
    	<passembly></passembly>
    	<plist></plist>
		<tohead></tohead>
    	<router-view></router-view>
    </div>
</template>
<script>
	import psearch from '../../component/psearch.vue';
	import pswiper from '../../component/pswiper.vue';
	import pclient from '../../component/pclient.vue';
	import pmove from '../../component/pmove.vue';
	import pclientfas from '../../component/pclientfas.vue';
	import passembly from '../../component/passembly.vue';
	import plist from '../../component/plist.vue';
	import tohead from '../../component/tohead.vue'
	export default{
		components:{
			psearch,
			pswiper,
			pclient,
			pmove,
			pclientfas,
			passembly,
			plist,
			tohead,
		}
	}
</script>
<style scoped>
	.home{
		background: #eee;
		margin-bottom: 50px;
	}
</style>