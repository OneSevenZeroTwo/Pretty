<template>
	<div class="mode">
		<div class="wallTop">
			<div class="tags">
				<a href="#" class="tags-a">
					<span class="tags-b">流行</span>
				</a>
				<a href="#" class="tags-a">
					<span class="tags-b">热销</span>
				</a>
				<a href="#" class="tags-a">
					<span class="tags-b">价格
					</span>
				</a>
				<div class="arrow">
				<a src="#" @click="sented=!sented">
					<img src="../img/packup.png" alt="" />
				</a>
				</div>
			</div>
			<div class="hide-tab" v-show="sented">
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
				<li v-for="good in choose">
					<a href="#/detail/">
						<img :src="good.show.img">
						<div class="youhui">
						<img :src="good.leftbottom_taglist" alt=""  />
						</div>
						<p class="li_title">{{good.title}}</p>
						<p class="mo_price">{{good.price}}</p>
						<p class="buy">{{good.sale}}人已购买</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				sented:true,
			}
		},
		computed: {
			choose() {
//				console.log(this)
			    return this.$store.state.choose;
			}
		},
		methods: {
			moring() {
				this.$store.dispatch("setChoose")
			},
			loading(){
//				if(this.$store.state.sented==true){
//					this.$store.state.sented=false;
//				}else{
//					this.$store.state.sented=true
//				}
//				console.log(this.$store.state.sented)
               
			}
		},
		mounted() {
			this.moring();
		},
	}
</script>
<style>
	.mode{
		overflow: hidden;
	}
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
		z-index: 100;
		margin-top: -9%;
		margin-right:4% ;
	}
	.arrow img{
		width: 100%;
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
	.mo_price{
		text-align: center;
		color: #FF3366;
	}
	.youhui{
		display: inline-block;
		width: 30px;
		height: 13px;
		position: relative;
		top:-15px;
		left: 0;
	}
	.li_title{
		margin-top: -10px;
	}
	.buy{
		text-align: center;
		font-size: 12px;
		color: #999;
	}
</style>