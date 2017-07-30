<template>
	
	<div class="weui-tab">
	<div class="weui-tab__panel">

	</div>
	<div class="weui-tabbar">
		<a href="#/index/home/list/pop/1" class="weui-tabbar__item" @click="showfoot(1)">
			<span  class="weui-tabbar__icon img1" :class="{img11:isshowfoot==1}"></span>
			<p class="weui-tabbar__label">主页</p>
		</a>
		<a href="#/index/category" class="weui-tabbar__item"  @click="showfoot(2)">
			<span  class="weui-tabbar__icon img2" :class="{img21:isshowfoot==2}"></span>
			<p class="weui-tabbar__label">分类</p>
		</a>
		<a href="#/car" class="weui-tabbar__item" @click="showfoot(3)">
			<span  class="weui-tabbar__icon img3" :class="{img31:isshowfoot==3}"></span>
			<p class="weui-tabbar__label">购物车</p>
		</a>
		<a href="#/mycenter" class="weui-tabbar__item" @click="showfoot(4)">
			<span  class="weui-tabbar__icon img4" :class="{img41:isshowfoot==4}"></span>
			<p class="weui-tabbar__label">我</p>
		</a>
	</div>
</div>

</template>

<script>
	export default{
		data(){
			return {
				isshowfoot:1,
			}
		},
		methods:{
			showfoot(num){

				this.isshowfoot =num;
				console.log(this.isshowfoot)
			}
		},
		mounted(){
			if(this.$route.path == '/index/home/list/pop/1' || this.$route.path == '/index/home/list/sell/1' || this.$route.path == '/index/home/list/new/1'){
				this.isshowfoot = 1
			}else if(this.$route.path == '/index/category'){
				this.isshowfoot = 2
			}else if(this.$route.path == '/car'){
				this.isshowfoot = 3
			}else if(this.$route.path == '/mycenter'){
				this.isshowfoot = 4
			}
		}
	}
</script>

<style scoped>
	.weui-tab{
		position:fixed;
		bottom:0;
		left:0;
		width: 100%;
		z-index: 2000;
		height: 43px;
		background: #fafafa;
		border-top: 1px solid #fafafa;
	}
	
	.img1{
		background: url('../img/2.png') no-repeat
	}
	.img2{
		background: url('../img/5.png') no-repeat
	}
	.img3{
		background: url('../img/3.png') no-repeat
	}
	.img4{
		background: url('../img/4.png') no-repeat
	}
	.img11{
		background: url('../img/6.png') no-repeat
	}
	.img21{
		background: url('../img/1.png') no-repeat
	}
	.img31{
		background: url('../img/7.png') no-repeat
	}
	.img41{
		background: url('../img/4.png') no-repeat
	}

	.weui-tabbar__icon{
		width:18px;
		height: 18px;
		margin: 0 32px;
		margin-top: 6px;
		/*text-indent: -9999px;*/
        text-align: left;
	}
	.weui-tabbar__item{
		float: left;
		width:25%;
		text-decoration: none;
		font-size: 12px;
		color: #999;
	}
	.weui-tabbar__item p{
		display: block;
		width: 100%;
		margin-top: -2px;
		text-align: center;
	}
</style>