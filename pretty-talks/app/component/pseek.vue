<template>
	<div class="list">
		<ul class="list_ch clearfix">
			<li v-for="good in choose">
				<a :href="'#/detail/'+good.iid">
					<img :src="good.image">
					<!--<div class="youhui">
						<img :src="good.leftbottom_taglist" alt="" />
					</div>-->
					<p class="li_title">{{good.title}}</p>
					<p class="mo_price">{{good.price}}</p>
					<p class="buy">{{good.buyCount}}人已购买</p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				sented: true,
				isshownav: 0,
				isontop: false,
			}
		},
		computed: {
			choose() {
//				console.log(this.$store.state.choose)
				return this.$store.state.choose;
			},
		},
		methods: {
			onTop() {
				window.addEventListener('scroll', () => {
					if(window.scrollY >= 2567) {
						this.isontop = true;
					} else {
						this.isontop = false;
					}
				})
			}
		},
		mounted() {
			this.$store.state.pcid = this.$route.params.pcid;
			this.$store.dispatch("setChoose")
		},
	}
</script>
<style>
	.list {
		background: #fff;
	}
	
	.list_ch li {
		float: left;
		width: 45%;
		margin-left: 12px;
	}
	
	.list_ch li img {
		width: 100%;
		height: 230px;
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
		background:url('../img/star1.png');
		margin: 0 18px;
		position: relative;
		top: 4px;
	}
	
	.count {
		color: #ccc;
	}
	
	.mo_price {
		text-align:center;
		color: #FF3366;
	}
	
	.youhui {
		display: inline-block;
		width: 30px;
		height: 13px;
		position: relative;
		top: -15px;
		left: 0;
	}
	
	.li_title {
		margin-top: 3%;
	}
	
	.buy {
		text-align: center;
		font-size: 12px;
		color: #999;
	}
</style>