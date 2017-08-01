<template>
	<div class="box clearfix ">
	<div class="box-wrap">
		<div class="wrap_a">
			<h3>正在流行</h3>
			<p></p>
		</div>
		<div class="list">
			<ul class="list_log clearfix">
				<li v-for="n in res">
<!--					<p class="aaa">{{n.link|timer}}</p>-->
					<a v-sore="n.link">
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
					<a v-sing="item.link" >
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
			mach(input) {
				var main = (input.split('='))[1].split('&')[0]
				console.log(main)
				return main
				console.log(111)
			},
			
		},
		mounted(){
			this.$store.state.pid = this.$route.params.pid;
			this.$store.dispatch("setChar")
		},
		directives:{
			sore:{
				bind(el,binding){
					var input = binding.value;
					var time = (input.split('='))[1].split('&')[0]
					el.setAttribute('href','#/listed/'+time)
				}
			},
			sing:{
				bind(el,binding){
					var input = binding.value;
					var timer = (input.split('='))[1].split('&')[0]
					el.setAttribute('href','#/listing/'+timer)
				}
			}
		}
		
	}
</script>

<style>
	html,body{
		background: #fff;
	}
	.box{
		background: #fff;
		/*overflow: hidden;*/
	}
	.box-wrap{
		width:100%;
	     height: 100%;
	}
		.box-wrap{
		background: #fff;
		width:100%;
	     height: 100%;
	     /*padding-top: 20px;*/
	}
	.list{
		/*margin-top: -10px;*/
	}
	.list_log{
		border-top:1px solid #eee;
		padding: 0;
	}
	.list_log li{
		width:25%;
		float: left;
		position: relative;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		/*box-sizing:border-box;*/
		padding-bottom: 6%;
		margin-bottom: 0;		
	}
	.list_log li a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.list_a{
		width: 76%;
		height: 70%;
		margin-left: 12%;
	}
	.list_a img{
		width: 100%;
		display: block;
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
		text-indent: 0.6em;
		width:100%;
		/*height: 32px;*/
	}
	.wrap_a h3{
		height: 36px;
		line-height: 36px;
		color: #333;
		font-size: 16px;
		font-weight: normal;
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
		background: #eee;
		/*margin-top: 413px;*/
	}
	.box-wrap{
		margin-top: 10px;
	}
</style>