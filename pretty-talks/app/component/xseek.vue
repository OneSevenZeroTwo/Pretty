<template>
<<<<<<< HEAD
	<div class="mode">
		<div class="wallTop">
			<div class="tags">
				<a href="" class="tags-a">
					<span class="tags-b">流行</span>
				</a>
				<a href="" class="tags-a">
					<span class="tags-b">热销</span>
				</a>
				<a href="" class="tags-a">
					<span class="tags-b">价格
					</span>
				</a>
				<a class="arrow">
				
				</a>
			</div>
			<div class="hide-tab" >
				<div class="price">
					<p class="price-b">0-30</p>
					<p class="price-b">30-60</p>
					<p class="price-b">60以上</p>
				</div>
				<div class="area">
					<input type="number" class="low" />
					<span class="ss"></span>
					<input type="number" class="low" />
					<p class="cancel">清空</p>
					<p class="confirm">确认</p>
				</div>
			</div>
		</div>

		<div class="list">
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
=======
	<div>
		111
>>>>>>> 303d634a2f01f26b42dab92c9e3fdbf363c43aa7
	</div>
</template>

<script>
</script>

<style>
	.wallTop {
		width: 100%;
		height: 10%;
	}
	
	.tags {
		width: 100%;
		height: 5%;
		position: fixed;
		left: 1%;
		margin-top: 2%;
		overflow: hidden;
	}
	
	.tags-a {
		float: left;
		width: 33%;
		height: 100%;
		font-size: 12px;
		text-align: center;
		background: white;
		z-index: 200;
		overflow: hidden;
	}
	
	.arrow {
		width: 17px;
		height: 21px;
		float: right;
		background: url('../img/packup.png') no-repeat;
	}
	
	.hide-tab {
		padding-top: 10%;
		visibility: visible;
		opacity: 1;
		overflow: hidden;
	}
	
	.price {
		width: 100%;
		height: 3%;
		padding: 2% 0 4% 0;
		overflow: hidden;
	}
	
	.price-b {
		width: 30%;
		text-align: center;
		font-size: 12px;
		height: 25px;
		line-height: 25px;
		background: #f3f3f3;
		margin: 2% 0 0 2%;
		float: left;
	}
	
	.area {
		padding: 0 2%;
		height: 3%;
		font-size: 12px;
		overflow: hidden;
	}
	
	.low {
		float: left;
		width: 24%;
		height: 30px;
		line-height: 30px;
		margin: 3% 0 1% 2%;
		border-radius: 2px;
		border: 1px solid #e5e5e5;
		overflow: hidden;
		padding-left: 1%;
		padding-right: 1%;
		font-size: 12px;
	}
	
	.ss {
		float: left;
		display: inline-block;
		width: 8px;
		height: 0;
		border-top: 1px solid #cbcbcb;
		margin: 8% 0 0 1%;
	}
	
	.cancel {
		float: left;
		border: 1px solid #ff5b76;
		color: #ff5b76;
		height: 30px;
		line-height: 30px;
		text-align: center;
		width: 20%;
		margin-left: 1%;
		margin-top: 3%;
		border-radius: 2px;
	}
	
	.confirm {
		float: left;
		border: 1px solid #ff5b76;
		color: #fff;
		background: #ff5b76;
		height: 30px;
		line-height: 30px;
		text-align: center;
		width: 20%;
		margin-left: 1%;
		margin-top: 3%;
		border-radius: 2px;
	}
	
	.list {
		background: #fff;
		margin-top: 10px;
	}
	.list_ch li {
		float: left;
		width: 45%;
		margin-left: 12px;
	}
	
	.list_ch li img {
		width: 100%;
	}
	
	.list_ch li .li_title {
		height: 20px;
		line-height: 20px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 12px;
	}
	
	.collect {
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(../img/star1.png);
		margin: 0 18px;
		position: relative;
		top: 4px;
	}
	
	.count {
		color: #ccc;
	}
</style>