<template>
	<header class="warpper">
		<form action="post" id="js_form">
			<a href="#" class="home_btn"></a>
			<input type="text" placeholder="套装" class="js_input" />
			<div class="js_right"></div>
		</form>
	</header>
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
		width:36px;
		height:28px;
		float: right;
		margin-top: 0.15rem;
		margin-right: 5px;
		line-height: 28px;
		text-align: center;
		background: url('../img/right.png') no-repeat center center;
		background-size:15px 12px;
	}
</style>