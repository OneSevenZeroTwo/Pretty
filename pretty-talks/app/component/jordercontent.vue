<template>
	<section class="content" data-allpromotion="">
		<ul class="goods-list" data-shopid="1172jnw8" data-shoppromotion="">
			<li>
				<a href="/shop/1zyeb84" class="shop">
					<img src="http://s3.mogucdn.com/p2/161111/hz75la_8f8kk1ff66365a77e520dckl0lb51_200x200.jpg" alt="" class="pic"> 美丽优选 </a>
				<a href="http://webim.meilishuo.com/wechat#detail/user/1zyeb84" class="im">联系商家</a>
			</li>
			<li class="skuList" v-for="(list,index) in orderList">
				<a href="http://m.meilishuo.com/wap/detail/1kfvoes" class="goods-pic">
					<img :src="list.imgUrl" alt="">
				</a>
				<div class="detail">
					<h3 class="title"> <a href="/wap/detail/1kfvoes">{{list.title}}</a> </h3>
					<p class="size"> <span>颜色：{{list.color}}</span> <span>规格：{{list.size}}</span> </p>
					<p class="price">
						<span>{{list.price|currecy}}</span>
						<del>{{list.origin_price|currecy}}</del>
						<b class="num">x{{list.num}}</b>
					</p>
				</div>
			</li>
			<li class="sendStyle"> 配送方式：<span class="fr">上门自取</span> </li>
			<li> 快递运费：<span class="fr">¥0.00</span> </li>
			<li> 价格合计：<span class="fr f-red">{{totalPrice|currecy}}</span> </li>
			<li>
				<input type="text" placeholder="给卖家留言" class="msg"> </li>
		</ul>
		<p class="tips" data-type="2">
			<img src="http://s18.mogucdn.com/p1/150917/upload_ieztgzddgnsdemlcgmzdambqgyyde_720x78.png" alt="">
		</p>
		<p class="btn-box"> 应付款：
			<span id="J_TotalPrice">{{0 + totalPrice|currecy}}</span>
			<a href="javascript:;" class="subOrder" @click="tj">提交订单</a>
		</p>
		<div class="windowDrive" v-show="isMaskShow">
			<div class="mask"></div>
			<div class="dialog" id="alert" style="top: 22.0009%;">
				<div class="dialog-con">非常抱歉，您的下单信息已失效，请重新返回商品详情页或购物车再次下单</div>
				<div class="dialog-btn" @click="toCar">
					<span class="sureBtn">确认</span>
				</div>
			</div>
		</div>
	</section>
</template>
<script scoped>
	export default {
		data() {
			return {
				isMaskShow: false,
			}
		},
		mounted() {
			//console.log(this.$store.state.orderList)
		},
		computed: {
			orderList() {
				return this.$store.state.orderList;
			},
			//计算总价
			totalPrice() {
				//console.log(this.orderList);
				var total = 0;
				this.orderList.map((goods) => {
					//如果选中，计算总价
					total += goods.price * goods.num;
				});
				return total;
			},
		},
		methods: {
			tj() {
				this.isMaskShow = !this.isMaskShow;
			},
			toCar() {
				this.$store.state.orderList = [];
				this.isMaskShow = !this.isMaskShow;
				window.location.href = "#/car";
			}
		},
		filters: {
			currecy(val) {
				var n = parseFloat(val).toFixed(2);
				return "¥" + n;
			}
		}
	}
</script>
<style scoped>
	a,
	a:visited {
		color: #333;
		font-size: 13px;
	}
	
	img {
		display: block;
		width: 100%;
	}
	
	del {
		text-decoration: line-through;
	}
	
	.goods-list {
		padding: 15px;
		margin-bottom: 9px;
		overflow: hidden;
		font-size: 15px;
	}
	
	.btn-box,
	.coupon,
	.popup,
	.tips {
		margin-bottom: 9px;
		overflow: hidden;
		font-size: 15px;
	}
	
	.address-box,
	.coupon,
	.goods-list {
		background-color: #fff;
		color: #333;
	}
	
	.goods-list li {
		position: relative;
		border-bottom: 1px solid #eee;
		overflow: hidden;
		padding-bottom: 15px;
		padding-top: 15px;
		font-size: 13px;
	}
	
	.goods-list .shop {
		float: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		height: 31px;
	}
	
	.goods-list .pic {
		width: 30px;
		height: 30px;
		-webkit-border-radius: 100%;
		border-radius: 100%;
		display: inline-block;
		vertical-align: middle;
		margin-right: 8px;
	}
	
	.goods-list .im {
		border: 1px solid #f36;
		color: #f36;
		-webkit-border-radius: 4px;
		border-radius: 4px;
		font-size: 12px;
		width: 21.15%;
		height: 23px;
		line-height: 23px;
		text-align: center;
		float: right;
	}
	
	.goods-list li {
		position: relative;
		border-bottom: 1px solid #eee;
		overflow: hidden;
		padding-bottom: 15px;
		padding-top: 15px;
		font-size: 13px;
	}
	
	.goods-list .goods-pic {
		float: left;
		margin-right: 4.34%;
		width: 17.39%;
		height: 60px;
		overflow: hidden;
	}
	
	.goods-list .detail {
		line-height: 1;
	}
	
	.goods-list .detail .title {
		font-size: 16px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: 400;
		margin-bottom: 9px;
	}
	
	.goods-list .detail p {
		margin-bottom: 14px;
		font-size: 15px;
	}
	
	.goods-list .detail .size {
		color: #999;
		font-size: 11px;
	}
	
	.goods-list .detail .size span {
		margin-right: 3.45%;
	}
	
	.goods-list .detail .price {
		font-size: 11px;
	}
	
	.goods-list .detail p:last-of-type {
		margin-bottom: 0;
	}
	
	.goods-list .detail .price del {
		color: #999;
		font-size: 10px;
		margin-left: 10px;
	}
	
	.goods-list .detail .price .num {
		float: right;
		font-weight: 400;
	}
	
	.goods-list .fr {
		float: right;
	}
	
	.goods-list .msg {
		border: 0;
		-webkit-appearance: none;
		outline: 0;
		width: 100%;
		box-sizing: border-box;
		background-color: #f5f5f5;
		font-size: 12px;
		padding: 12px 2%;
	}
	
	.btn-box a,
	.goods-list .msg {
		-webkit-border-radius: 4px;
		border-radius: 4px;
	}
	
	.tips {
		padding: 0;
		margin-bottom: 0;
		background-color: #fff;
		color: #333;
	}
	
	.btn-box,
	.popup {
		background-color: #fff;
	}
	
	.btn-box {
		border-top: 1px solid #eee;
		margin-bottom: 0;
		text-align: right;
		color: #666;
		padding: 20px 4%;
	}
	
	.btn-box span,
	.goods-list .f-red {
		color: #f36;
	}
	
	.btn-box a {
		padding: 7px 12px;
		background-color: #f36;
		color: #fff;
		font-size: 18px;
		margin-left: 7.2%;
	}
	
	.windowDrive {
		text-align: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 160%;
		z-index: 999;
	}
	
	.mask {
		position: fixed;
		top: 0;
		z-index: 10000;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.5;
	}
	
	.windowDrive .dialog {
		position: relative;
		display: inline-block;
		background-color: #fff;
		width: 270px;
		-webkit-border-radius: 8px;
		border-radius: 8px;
		z-index: 10001;
	}
	
	.windowDrive .dialog-con {
		text-align: center;
		color: #000;
		padding: 20px;
	}
	
	.windowDrive .dialog-btn {
		text-align: center;
		line-height: 45px;
		border-top: 1px solid #d9d9d9;
	}
	
	.windowDrive .dialog-btn span {
		color: #f36;
		box-sizing: border-box;
		display: inline-block;
	}
</style>