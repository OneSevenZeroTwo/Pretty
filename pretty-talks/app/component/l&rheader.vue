<template>
	<header>
		<div>
			<a href="javascript:history.go(-1)">
				<img src="../../images/login&reg&mine/back.png" />
			</a>
		</div>
		<div class="mid">
			<a href="">{{theHeader.title}}</a>
		</div>
		<div>
			<a :href='theHeader.theHref' @click="quit">
				{{theHeader.rightBtn}}
				<i class="material-icons" v-show="theHeader.car">local_grocery_store</i>
			</a>
		</div>
	</header>
</template>
<style scoped>
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
		height: 100%;
	}
	
	header img {
		display: block;
		margin: 20% 0 0 15%;
		height: 20px;
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
		data(){
			return{
			}
		},
		methods:{
			quit(){
				if(this.theHeader.rightBtn =='退出'){
					var now = new Date();
					now.setDate(now.getDate()-1);
					now = now.toUTCString();
					document.cookie = 'id=null;expires=' + now;
					window.location.href = 'http://localhost:4399/#/login';
				}else{

				}
				
			}
		},
	}
</script>