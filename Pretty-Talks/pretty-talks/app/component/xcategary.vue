<template>
	<div class="box-wrap">
		<div class="wrap_a">
			<h3 @click="load()">本周流行</h3>
			<p></p>
		</div>
		<div class="list">
			<ul class="list_log clearfix">
				<li v-for="n in news">
					<!--<p class="getId">{{n.link|time}}</p>-->
					<a v-vid="n.link">
						<div class="list_a">
							<img :src="n.image" alt="" />
						</div>
						<span class="list_b">{{n.title}}</span>
					</a>
				</li>
			</ul>
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
			news() {
				return this.$store.state.news;
				
			}
		},
		methods:{
			load() {
				this.$store.dispatch("setNews")
			},
			mach() {
				this.$store.dispatch("setChar")
			},
			
		},
		mounted(){
			this.load();
			
		},
		directives:{
			vid:{
				bind(el,binding){
					var input = binding.value;
					var main = (input.split('='))[1].split('&')[0]
					el.setAttribute('href','#/subCategory/'+main)
				}
			}
		}
	}
</script>

<style >
<style>
	html,body{
		background: #fff;
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
		height: 106px;
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
		/*height: 80px;*/
		margin-left: 12%;
		width: 70%;
		/*height: 80px;*/
	}
	.list_a img{
		width: 100%;
		display: block;
		/*margin-left: 5px;*/
		/*margin-left:17%;*/
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
		height: 64px;
		line-height: 64px;
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
</style>