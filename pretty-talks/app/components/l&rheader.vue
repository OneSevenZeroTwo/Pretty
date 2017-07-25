<template>
	<header>
		<div>
			<img src="../../images/login&reg&mine/back.png" />
		</div>
		<div class="mid">
			<a href="">{{theHeader.title}}</a>
		</div>
		<div>
			<a href="">{{theHeader.rightBtn}}</a>
		</div>
	</header>
</template>
<style>
	header {
		height: 45px;
		width: 100%;
		overflow: hidden;
		text-align: center;
		line-height: 45px;
		border-bottom: 1px solid rgba(51, 51, 51, .15);
	}
	
	header div {
		float: left;
		width: 15%;
	}
	
	header img {
		height: 14px;
	}
	
	header a {
		color: #666;
		font-size: 18px;
	}
	
	.mid {
		width: 70%;
	}
</style>
<script>
	export default {
		props:['theHeader'],
	}
</script>