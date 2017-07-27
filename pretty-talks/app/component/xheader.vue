<template>
	<header class="warpper">
		<form action="post" id="js_form">
			<a href="#" class="home_btn"></a>
			<input type="text" placeholder="套装" class="js_input" />
			<div class="js_right"></div>
		</form>
	</header>
	<!--<div class="seek">
		<div class="init-box">
			<span class="init_a"></span>
			<h3 class="init_b">热门搜索</h3>
			<ul class="list">
				<li class="list-a">
					<a href="#">连衣裙</a>
				</li>
				<li class="list-a">
					<a href="#">小白鞋</a>
				</li>
				<li class="list-a">
					<a href="#">省心套装</a>
				</li>
				<li class="list-a">
					<a href="#">碎花连衣裙</a>
				</li>
				<li class="list-a">
					<a href="#">明星同款</a>
				</li>
				<li class="list-a">
					<a href="#">高跟鞋</a>
				</li>
				<li class="list-a">
					<a href="#">美妆</a>
				</li>
				<li class="list-a">
					<a href="#">墨镜</a>
				</li>
			</ul>
		</div>
	</div>-->
</template>

<script>
</script>

<style scoped>
	.warpper {
		width: 100%;
		height: 39px;
		background-color: #fff;
		position: relative;
		font-size: 12px;
		z-index: 100;
	}
	
	.home_btn {
		float: left;
		width: 25px;
		height: 39px;
		margin: 0 5px;
		background: url('../img/logo.png') no-repeat center;
		background-size: contain;
		text-align: center;
		color: #666;
	}
	
	.js_input {
		float: left;
		font-size: 10px;
		color: #333;
		border: none;
		padding: 5px 10px 5px 20px;
		width: 75%;
		height: 90%;
		border-radius: 5px;
		margin-bottom: 0.16rem;
		margin-top: 8px;
		margin-left: 8px;
		background: #f4f4f4 url('../img/jing.png') no-repeat 0.2rem center;
		background-size: auto .8rem;
		-webkit-appearance: none;
		outline: none;
	}
	.js_right{
		width:32px;
		height:28px;
		float: right;
		margin-top: 0.15rem;
		margin-right: 5px;
		line-height: 28px;
		text-align: center;
		background: url('../img/right.png') no-repeat center center;
		background-size: 15px 12px;
	}
	
	.seek {
		font-size: 0.24rem;
		padding-top: 1rem;
		background-color: #FFF;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		min-height: 100%;
	}
	
	.init-box {
		color: #666;
		position: relative;
		margin-left: 0.3rem;
		padding-top: 0.3rem;
		padding-bottom: 0.5rem;
	}
	
	.init_a {
		position: absolute;
		left: -0.07rem;
		display: inline-block;
		width: 0.22rem;
		height: 0.3rem;
		background: url('../img/huo.png') no-repeat;
		background-size: contain;
	}
	
	.init_b {
		font-size: 0.3rem;
		font-weight: normal;
		padding-left: 0.3rem;
		margin-bottom: 0.05rem;
	}
	
	.list-a {
		float: left;
		padding: .08rem .22rem;
		margin-top: 0.25rem;
		background-color: #F4F4F4;
		margin-left: 0.2rem;
		border-radius: 0.4rem;
	}
	
	.list-a a {
		color: #f36;
		text-decoration: none;
	}
</style>