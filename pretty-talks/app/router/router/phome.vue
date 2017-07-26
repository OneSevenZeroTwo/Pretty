<template>
    <div class="home">
    	<pswiper></pswiper>
    	<pclient></pclient>
    	<pmove></pmove>
    	<pclientfas></pclientfas>
    	<passembly></passembly>
    	<plist></plist>
    	<router-view></router-view>
    </div>
</template>
<script>
	import pswiper from '../../component/pswiper.vue';
	import pclient from '../../component/pclient.vue';
	import pmove from '../../component/pmove.vue';
	import pclientfas from '../../component/pclientfas.vue';
	import passembly from '../../component/passembly.vue';
	import plist from '../../component/plist.vue';
	export default{
		components:{
			pswiper,
			pclient,
			pmove,
			pclientfas,
			passembly,
			plist
		}
	}
</script>
<style scoped>
	.home{
		background: #eee;
		margin-bottom: 50px;
	}
</style>