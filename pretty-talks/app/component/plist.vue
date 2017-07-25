<!--首页商品列表-->
<template>
	<div class="list">
		<ul class="lnav clearfix">
			<li>
				<a href=""><span class="active">流行</span></a>
			</li>
			<li>
				<a href=""><span>新款</span></a>
			</li>
			<li>
				<a href=""><span>精选</span></a>
			</li>
		</ul>
		<ul class="list_ch clearfix">
			<li>
				<a href="#">
					<img src="http://s3.mogucdn.com/p2/170719/upload_6ag65c1lh04beda6b4kc706925cb5_640x900.jpg_320x999.webp">
					<p class="li_title">2017夏季新款韩版宽松中长款拼接竖条纹a字裙荷叶边连衣裙女</p>
					<p class="mo_price">￥68.75 <span class=" collect"></span></p>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://s3.mogucdn.com/p2/170719/upload_6ag65c1lh04beda6b4kc706925cb5_640x900.jpg_320x999.webp">
					<p class="li_title">2017夏季新款韩版宽松中长款拼接竖条纹a字裙荷叶边连衣裙女</p>
					<p class="mo_price">￥68.75 <span class=" collect"></span><span class="count">456</span></p>
				</a>
			</li>
		</ul>
		
	</div>
</template>

<script>
</script>

<style scoped>
	.list{
		background: #fff;
		margin-top: 10px;
	}
	.lnav li{
		float: left;
		width: 32%;
		margin: 0;
	}
	.lnav li a{
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.active{
		display: inline-block;
		color: #FF3366;
		border-bottom:2px solid #FF3366;
		height: 34px;
		font-size: 14px;
	}
	.list_ch li{
		float: left;
		width: 45%;
		margin-left: 12px;
	}
	.list_ch li img{
		width: 100%;
	}
	.list_ch li .li_title{
		height: 20px;
		line-height: 20px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 12px;
	}
	.collect{
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(../img/star1.png);
		margin:0 18px;
		position: relative;
		top:4px;
	}
	.count{
		color: #ccc;
	}
</style>