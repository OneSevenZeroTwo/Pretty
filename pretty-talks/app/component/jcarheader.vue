<template>
	<header class="page_head">
		<div class="back_icon" id="back_btn">
			<a href="javascript:history.go(-1)">
				<img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png">
			</a>
		</div>
		<div class="right_btn js-action" data-action="removeSelected" @click="isDelList">删除</div>
		<div class="title">
			<a href="javascript:;">购物车</a>
		</div>
	</header>
</template>

<script>
	export default {
		methods: {
			isDelList() {
				alert("确定要删除选定项？")
				this.$store.state.carList.forEach((goods,idx) => {
						console.log(this.$store.state.isChecked,goods,idx);
					if(this.$store.state.isChecked.join("").indexOf(goods.id) != -1) {
						//this.$store.state.carList.splice(idx,1);
					}
				});
			}
		}
	}
</script>

<style scoped>
	body,
	html {
		width: 100%;
		background-color: #f4f4f4;
		color: #666;
	}
	
	.page_head {
		height: 55px;
		width: 100%;
		text-align: center;
		color: #333;
		line-height: 55px;
		border-bottom: 1px solid rgba(51, 51, 51, .15);
	}
	
	.cart_list,
	.page_head {
		background-color: #fff;
		overflow: hidden;
	}
	
	.page_head .back_icon {
		z-index: 5;
		float: left;
		text-align: left;
		vertical-align: middle;
		width: 65px;
		height: 55px;
		padding-left: 17px;
	}
	
	.page_head .back_icon img {
		width: 12px;
		display: inline-block;
		margin-top: 16px;
	}
	
	.page_head .right_btn {
		z-index: 5;
		font-size: 20px;
		float: right;
		padding-right: 17px;
		height: 55px;
	}
	
	.page_head .title {
		z-index: 1;
		text-align: center;
	}
	
	.page_head .title a {
		font-size: 20px;
		color: #666;
		text-decoration: none;
	}
</style>