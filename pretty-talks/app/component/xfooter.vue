<template>
	
	<div class="weui-tab">
	<div class="weui-tab__panel">

	</div>
	<div class="weui-tabbar">
		<a href="#" class="weui-tabbar__item">
			<img src="https://s10.mogucdn.com/p2/160802/upload_439ak5453ih43h5d2a109dhe71agg_36x39.png" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">主页</p>
		</a>
		<a href="#" class="weui-tabbar__item"  >
			<img src="https://s10.mogucdn.com/p2/160802/upload_488lbkj7ll3e92bg3ld1kh5k73l87_34x34.png" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">分类</p>
		</a>
		<a href="#" class="weui-tabbar__item" >
			<img src="https://s10.mogucdn.com/p2/160802/upload_0eabagglh39aggl8jihfakfbf70a9_40x38.png" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">购物车</p>
		</a>
		<a href="#" class="weui-tabbar__item" >
			<img src="https://s10.mogucdn.com/p2/160802/upload_5g85l55d280l94lfg678lcleegf5e_38x38.png" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">我</p>
		</a>
	</div>
</div>

</template>

<script>
</script>

<style scoped>
	.weui-tab{
		position:fixed;
		bottom:0;
		left:0;
		width: 100%;
		z-index: 10;
		height: 43px;
		background: #fafafa;
		border-top: 1px solid #fafafa;
	}
	.weui-tabbar__icon{
		width:16px;
		height: 16px;
		margin: 0 32px;
		margin-top: 8px;
		/*text-indent: -9999px;*/
        text-align: left;
	}
	.weui-tabbar__item{
		float: left;
		width:25%;
		text-decoration: none;
		font-size: 12px;
		color: #999;
	}
	.weui-tabbar__item p{
		display: block;
		width: 100%;
		margin-top: -2px;
		text-align: center;
	}
</style>