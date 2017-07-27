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
				/*this.$store.state.carList.forEach((goods) => {
					if(this.isChecked.join("").indexOf(goods.id) != -1) {
						this.$store.state.delList = true;
					}
				});*/
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
		height: .92rem;
		width: 100%;
		text-align: center;
		color: #333;
		line-height: .92rem;
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
		width: .8rem;
		padding-left: .3rem;
	}
	
	.page_head .back_icon img {
		width: .2rem;
		display: inline-block;
		margin-top: .28rem;
	}
	
	.page_head .right_btn {
		z-index: 5;
		font-size: .35rem;
		float: right;
		padding-right: .3rem;
		height: .88rem;
	}
	
	.page_head .title {
		z-index: 1;
		text-align: center;
	}
	
	.page_head .title a {
		font-size: .35rem;
		color: #666;
		text-decoration: none;
	}
</style>