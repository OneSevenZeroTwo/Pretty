<template>
	<div id="thebody">
		<lrHeader :theHeader='headerMsg'></lrHeader>
		<div class="goods_wall">
			<div class="theleft" v-for="n in list">
				<a href="">
					<img :src="n.image" alt="" />
					<p class="clothesTitle">{{n.title}}</p>
					<div class="figcaption">
						<span class="price">{{n.price}}</span>
						<i class="material-icons">star_border</i>
						<span>{{n.cfav|cut}}</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import lrHeader from "../component/l&rheader.vue";
	export default {
		data() {
			return {
				headerMsg: {
					title: '收藏的宝贝',
					rightBtn: '',
					theHref: '#/car',
					car: 'true'
				},
				list: [],
			}
		},
		components: {
			lrHeader
		},
		mounted() {
			var theId = document.cookie.split('=')[1];
			this.$ajax.get('http://localhost:999/search', {
				params: {
					'phone': theId,
				}
			}, )
			.then(res => {
				var goods = res.data[0].iid.split(',');
				for(var i = 0; i < goods.length; i++) {
					this.$ajax.get('http://localhost:999/getstar', {
						params: {
							'iid': goods[i],
						}
					}, ).then(res => {
						this.list = this.list.concat(res.data);
					}).catch(err => {})
				}
			})
			.catch(err => {})
		},
		filters:{
			cut(value){
				return value.slice(2,-1);
			}
		}
	}
</script>

<style scoped>
	.clothesTitle{
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	#thebody {
		background-color: #fff;
	}
	
	.goods_wall {
		overflow: hidden;
		margin-top: 5%;
	}
	
	.theleft {
		float: left;
		width: 45%;
		margin-left: 3%;
		margin-bottom: 3%;
	}
	
	.theleft img {
		display: block;
		width: 100%;
	}
	
	.theleft p {
		padding-left: 6%;
	}
	
	.price {
		color: #ff7a9a;
		padding-left: 10%;
	}
	
	.figcaption {
		overflow: hidden;
		margin-top: 3%;
	}
	
	.figcaption span,
	.figcaption i {
		float: left;
		line-height: 100%;
	}
	
	.figcaption i {
		font-size: 16px;
		margin-left: 5%;
		line-height: 90%;
	}
</style>