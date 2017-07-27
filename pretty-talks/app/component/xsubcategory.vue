<template>
	<div class="box">
	<div class="box-wrap">
		<div class="wrap_a">
			<h3>正在流行</h3>
			<p></p>
		</div>
		<div class="list">
			<ul class="list_log">
				<li v-for="n in res">
					<a href="">
						<div class="list_a">
							<img :src="n.image" alt="" />
						</div>
						<span class="list_b">{{n.title}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="aaa"></div>
	<div class="wrap">
		<div class="wrap_a">
			<h3>畅销热卖</h3>
			<p></p>
		</div>
		<div class="list">
			<ul class="list_log">
				<li v-for="item in now">
					<a href="" >
						<div class="list_a">
							<img :src="item.image" alt="" />
						</div>
						<span class="list_b">{{item.title}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		computed:{
			res() {
//				console.log(this.$store.state.res)
				return this.$store.state.res
			},
			now(){
//				console.log(this.$store.state)
				return this.$store.state.now
			}
		},
		methods:{
			mach() {
				
			},
			
		},
		mounted(){
			this.$store.state.pid = this.$route.params.pid;
			this.$store.dispatch("setChar")
		},
	}
</script>

<style>
	.box-wrap{
		width:100%;
	     height: 100%;
	}
	.list{
		margin-top: -10px;
	}
	.list_log{
		border-top:1px solid #eee;
		padding: 0;
	}
	.list_log li{
		width:25%;
		height: 0;
		list-style: none;
		float: left;
		overflow: hidden;
		position: relative;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		box-sizing:border-box;
		padding-bottom: 32%;
		margin-bottom: 0;		
	}
	.list_a{
		width: 56px;
		height: 80px;
	}
	.list_a img{
		width: 100%;
		display: block;
		margin-left: 5px;
	}
	.list_b{
		position: absolute;
		bottom:.1rem;
		width:100%;
		left:0;
		font-size: 0.22rem;
		color:#666;
		text-align:center;
		font-weight: normal;
		line-height: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: rgba(255,255,255,0.8);
	}
	.wrap_a{
		width:100%;
		overflow: hidden;
		padding: .2rem;
	}
	.wrap_a h3{
		color: #333;
		font-size: 0.64rem;
		font-weight: normal;
		float: left;
		margin:20px 0;
	}
	.wrap_a p{
		color: #666;
		font-size: 0.28rem;
		float: right;
		margin-top: 0.1rem;
	}
	.aaa{
		width:100%;
		height: 10px;
		/*background: #eee;*/
		/*margin-top: 376px;*/
	}
</style>