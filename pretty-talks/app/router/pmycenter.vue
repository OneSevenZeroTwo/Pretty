<template>
	<div>
		<lrHeader :theHeader='headerMsg'></lrHeader>
		<div id="userInfo">
			<div class="img_wrap">
				<div class="img_innner">
					<img :src="userimg">
				</div>
				<p>{{username}}</p>
			</div>
			<div class="list">
				<a href=""><span class="num" id="myLove">0</span>收藏的宝贝</a>
				<a href=""><span class="num" id="myShop">0</span>收藏的店铺</a>
				<a href=""><i class="material-icons">receipt</i></span>优惠券</a>
				<a href="#/address"><i class="material-icons">place</i></span>收货地址</a>
			</div>
		</div>
		<div id="contentbox">
			<a href="http://act.meilishuo.com/daren1" class="daren">
				<span><img src="../../images/login&reg&mine/share.png"></span>
				<span>成为分享达人</span>
				<p class="darenr"><span>分享赚钱</span> <img src="../../images/login&reg&mine/goshare.png"></p>
			</a>
			<mu-tabs :value="activeTab" @change="handleTabChange">
				<mu-tab value="tab1" icon="assignment" title="全部订单" />
				<mu-tab value="tab2" icon="account_balance_wallet" title="代付款" />
				<mu-tab value="tab3" icon="local_mall" title="待收货" />
				<mu-tab value="tab4" icon="local_shipping" title="待评价" />
			</mu-tabs>
		</div>
		<div class="list_wrap">
			<div class="tab_content">
				<div class="noOrder" v-show="show">
					<img src="../../images/login&reg&mine/list.png">
					<p>你还没有相关的订单</p>
				</div>
				<div v-show="!show">
					<div class="orderlist" v-for="n in orderData">
						<ul>
							<li class="otitle">
								<span class="oleft" id="ordertitle">商家 : 美丽优选</span>
								<span class="oright">代付款</span>
							</li>
							<li class="goods">
								<a href="javascript:;">
									<div class="oleft">
										<img :src="n.imgUrl" class="orderimg"/>
									</div>
									<div class="odetail">
										<p class="deTitle">{{n.title}}</p>
										<p class="desc">
											<span class="num">数量：{{n.num}}</span>
											<span class="price">￥{{n.price}}</span>
										</p>
									</div>
									<div></div>
								</a>
							</li>
							<li class="pay">
								<p class="totalPrice">合计：<span>￥{{n.num*n.price}}</span></p>
								<div class="order_btn">
									<mu-raised-button label="取消订单" class="cancle" @click="cancle(n.id)"/>
									<mu-raised-button label="付款" class="buy" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<xfooter></xfooter>
	</div>
</template>

<script>
	import lrHeader from "../component/l&rheader.vue";
	import xfooter from "../component/xfooter.vue";
	export default {
		data() {
			return {
				orderData:null,
				show: true,
				username: '未登录',
				userimg: require('../../images/login&reg&mine/step2.png'),
				activeTab: 'tab1',
				headerMsg: {
					title: '个人中心',
					rightBtn: '退出',
				},
			}
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val
			},
			cancle(id){
				console.log(id);
			}
		},
		components: {
			lrHeader,
			xfooter
		},
		mounted() {
			var theId = document.cookie.split('=')[1];
			if(theId) {
				this.show = false;
				this.$ajax.get('http://localhost:999/search', {
					params: {
						'phone': theId,
					}
				}, )
				.then(res => {
					this.username = res.data[0].username;
					this.userimg = res.data[0].headerImgUrl;
					this.$ajax.get('http://localhost:999/orders', {
						params: {
							'id': theId,
						}
					}, )
					.then(res => {
						if(res.data.length == '0'){
							this.show = true;
						}else{
							this.show = false;
							this.orderData = res.data;
						}
					})
					.catch(err => {})
					})
				.catch(err => {})
				
			} else {
				this.show = true;
			}
		}
	}
</script>

<style scoped>
	#ordertitle{
		width: 50%;
	}
	.list_wrap {
		overflow: auto;
		margin-bottom: 20%;
		margin-top: 3%;
	}
	
	.orderlist {
		margin-top: 1%;
		background-color: #fff;
		font-size: 14px;
		color: #666;
		margin-bottom: 1%;
	}
	
	.orderlist ul {
		padding: 0 3% 0 3%;
	}
	
	.orderlist li {
		width: 100%;
		padding: 3%;
		border-bottom: 1px solid #ebebeb;
	}
	
	.otitle {
		overflow: hidden;
	}
	
	.oleft {
		float: left;
		display: block;
		width: 20%;
	}
	
	.oleft img {
		width: 100%;
	}
	
	.oright {
		float: right;
		color: #ff7a9a;
	}
	
	.odetail {
		float: right;
		width: 75%;
	}
	
	.odetail p {
		display: block;
	}
	
	.goods {
		overflow: hidden;
	}
	
	.desc {
		overflow: hidden;
	}
	
	.desc .num {
		color: #888;
		display: block;
		float: left;
	}
	
	.desc .price {
		display: block;
		float: right;
	}
	
	.pay {
		text-align: right;
		border-bottom: 0;
	}
	
	.totalPrice span {
		color: #ff7a9a;
	}
	
	.list_wrap {
		overflow: hidden;
		background-color: rgb(244, 244, 244);
	}
	
	.tab_content {
		position: relative;
	}
	
	.order_btn {
		margin-top: 3%;
	}
	
	.cancle {
		border-radius: 10%;
		color: #888;
	}
	
	.buy {
		border-radius: 10%;
		background-color: #ff7a9a;
		color: #fff;
		margin-left: 4%;
	}
	
	.noOrder {
		text-align: center;
		padding-top: 8%;
		padding-bottom: 8%;
	}
	
	.noOrder img {
		width: 30%;
		display: inline-block;
	}
	
	.noOrder p {
		font-size: 16px;
		padding-top: 2%;
		font-weight: 400;
	}
	
	.material-icons {
		color: #fff;
	}
	
	#contentbox {
		padding-top: 3%;
		background-color: rgb(244, 244, 244);
	}
	
	#userInfo {
		height: 190px;
		text-align: center;
		background: url(../../images/login&reg&mine/center-bgi.jpg) no-repeat center;
		background-size: cover;
		overflow: hidden;
	}
	
	.img_innner {
		display: block;
		width: 50px;
		height: 50px;
		margin: auto;
		margin-top: 7%;
	}
	
	.img_innner img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	#userInfo p {
		color: #fff;
		font-size: 16px;
		margin-top: 3%;
	}
	
	.list {
		margin-top: 3%;
		border-top: 1px solid rgba(255, 255, 255, .5);
		box-sizing: border-box;
		color: #fff;
	}
	
	.list a {
		float: left;
		width: 25%;
		color: #fff;
	}
	
	.list span,
	.list i {
		display: block;
		margin-top: 13%;
	}
	
	.list a:nth-child(2n) {
		border-right: 1px solid rgba(255, 255, 255, .5);
		box-sizing: border-box;
	}
	
	.daren {
		display: block;
		padding: 3% 5%;
		overflow: hidden;
		font-size: 16px;
		background-color: #fff;
	}
	
	.daren span {
		display: block;
		float: left;
		height: 100%;
		line-height: 25px;
	}
	
	.darenr {
		display: block;
		float: right;
		height: 100%;
	}
	
	.daren img {
		width: 50%;
	}
	
	.darenr img {
		width: 9%;
		margin-left: 9px;
		line-height: 25px;
	}
	
	.darenr img,
	.darenr span {
		display: inline-block;
	}
	
	.mu-tabs {
		margin-top: 3%;
		background-color: #fff;
	}
	
	.mu-tab-link {
		color: #666;
	}
	
	.mu-tab-active {
		color: #ff7a9a;
	}
</style>