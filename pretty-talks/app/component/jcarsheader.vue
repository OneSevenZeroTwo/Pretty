<template>
	<header class="page_head">
		<div class="back_icon" id="back_btn">
			<a href="javascript:history.go(-1)">
				<img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png">
			</a>
		</div>
		<a class="right_btn" :id="thisHeader.id" :href="thisHeader.href">{{thisHeader.right_btn}}</a>
		<div class="title">
			<a href="javascript:;">{{thisHeader.title}}</a>
		</div>
	</header>
</template>
<script>
	export default {
		props: ['thisHeader'],
	}
</script>
<style>
	.page_head {
		height: 50px;
		width: 100%;
		background-color: #fff;
		overflow: hidden;
		text-align: center;
		color: #333;
		line-height: 50px;
		border-bottom: 1px solid rgba(51, 51, 51, .15);
	}
	
	.page_head .back_icon {
		z-index: 5;
		float: left;
		text-align: left;
		vertical-align: middle;
		width: 14.66%;
		padding-left: 4%;
	}
	
	.page_head .back_icon img {
		width: 10px;
		display: inline-block;
		margin-top: 14px;
	}
	
	.page_head .right_btn {
		z-index: 5;
		font-size: 18px;
		float: right;
		padding-right: 4%;
		height: 46px;
	}
	
	.page_head .title {
		z-index: 1;
		text-align: center;
	}
	
	.page_head .title a {
		font-size: 18px;
	}
	
	#save_address {
		color: #ff7a9a;
	}
</style>