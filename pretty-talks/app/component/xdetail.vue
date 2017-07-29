<template>
	<div class="screen">
		<!--轮播图-->
			<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide><img src="../img/2.jpg" alt="" /></swiper-slide>
				<swiper-slide><img src="../img/8.jpg" alt="" /></swiper-slide>
				<swiper-slide><img src="../img/2.jpg" alt="" /></swiper-slide>
				<swiper-slide><img src="../img/8.jpg" alt="" /></swiper-slide>
				<swiper-slide><img src="../img/2.jpg" alt="" /></swiper-slide>
				<swiper-slide><img src="../img/8.jpg" alt="" /></swiper-slide>
				<swiper-slide><img src="../img/2.jpg" alt="" /></swiper-slide>

				<div class="swiper-pagination choose" slot="pagination">
					
				</div>
			</swiper>
			<!--商品详情-->
		<div class="info">
			<div class="info_a">
				（新品）假两件气质修身露肩蕾丝漏肩挂脖连衣裙
			</div>
			<div class="info_b">
				<span class="now">¥67.50</span>
			</div>
			<div class="info_c">
				<span class="item">销量 53</span>
				<span class="item">收藏343人</span>
				<span class="item">72小时发货</span>
				<span class="item">广东 广州</span>
			</div>
			<div class="info_d">
				<ul class="ing">
					<li>
						<img src="https://s10.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png" alt="" />
						<span>超时赔付</span>
					</li>
					<li>
						<img src="https://s10.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png" alt="" />
						<span>超时赔付</span>
					</li>
					<li>
						<img src="https://s10.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png" alt="" />
						<span>超时赔付</span>
					</li>
				</ul>
				<img src="https://s10.mogucdn.com/mlcdn/c45406/170711_701e7hcfi1j9fe76hgd560bj28d87_14x22.png" alt="" class="good" />
			</div>
		</div>
		<div class="shop"></div>
		<div class="shop-info">
			<div class="fix">
				<a href="" class="fix_a">
					<img src="http://s3.mogucdn.com/p2/161111/hz75la_8f8kk1ff66365a77e520dckl0lb51_200x200.jpg_100x100.jpg" alt="" />
				</a>
				<div class="fix_b">
				    <p class="title">美丽优选</p>
				    <span class="has" style="display: none;">已收藏</span>
				    <span class="not">+收藏</span>
				</div>
			</div>
			<div class="content">
				<div class="sale">
					<span>2354772</span>
					<br />总销量
				</div>
				<div class="all">
					<span>41136</span>
					<br />全部宝贝
				</div>
				<div class="send"></div>
				<div class="count">
					<ul>
						<li>
							<span>描述相符</span>
							<em>4.60</em>
							<i>高</i>
						</li>
						<li>
							<span>价格合理</span>
							<em>4.59</em>
							<i>高</i>
						</li>
						<li>
							<span>质量满意</span>
							<em>4.58</em>
							<i>高</i>
						</li>
					</ul>
				</div>
			</div>
			<div class="goshop">
				<a href="">进店逛逛</a>
			</div>
		</div>
		<div class="shop"></div>
		<!--选项卡-->
		<div class="tab">
			<div class="tab_a">
				<nav class="tabs">
					<li class="tab-item">
						<span>图文详情</span>
						<i></i>
					</li>
					<li class="tab-item">
						<span>商品参数</span>
						<i></i>
					</li>
					<li class="tab-item">
						<span>评价()</span>
						<i></i>
					</li>
					<li class="tab-item">
						<span>热卖推荐</span>
						<i></i>
					</li>
				</nav>
			</div>
		</div>
		<div class="panel">
			<!--图文详情-->
			<div class="panel_a">
				<!--主题-->
				<div class="prap">
					<p class="start"><i></i></p>
					<p class="desc">夏季新品甜美多色拼接裹胸式吊带高腰复古显瘦中长款连衣裙  S254</p>
					<p class="end"><i></i></p>
				</div>
				<!--详情-->
				<div class="pics">
					<dl class="pic-box">  
						<dt class="pic-title">穿着效果</dt>   
						<dt class="pic-desc">是否有弹性：无弹 是否含配件：不包含配件 内衬：有内衬 </dt>  
						<dd class="pic-list">  
							<img class="fadeIn" src="http://s3.mogucdn.com/p2/170721/10000000_76b11khgk9kldd69l7h9hgbg76cjf_1500x300.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/p2/170721/10000000_3e2953id05dddf7h991llj7eh1k6l_1500x437.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/p2/170717/upload_6a96ef0dc0ifc43bgl13ch013gj70_723x252.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s11.mogucdn.com/mlcdn/c45406/170714_2kg1dia4abcl6dj2i1h33iag16a42_640x960.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_27hf137e9d642l2c9h76kl1jdi709_640x960.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_25ja7c13b1ii16lc3a0kgd8906ca6_640x960.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_1jg4f13e5ik8gk033g253l9eijdff_887x640.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s11.mogucdn.com/mlcdn/c45406/170714_4k5h24j1ci30dae642h9edck2208i_720x640.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_850bcc13433765g5dfe6i8cb35lh9_856x640.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_5fhah4d9a343k9bh3b7ljljgc9cbh_650x866.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_55ec0glc5k0kl373c6d4k903l84df_640x960.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s11.mogucdn.com/mlcdn/c45406/170714_6gdfc64l4723blkl4hjliadai9af0_643x640.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_70e1kh8bd564agjjf07170e2059jd_799x800.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_44g6j544bjl74a00c43je0d4bbc2b_791x640.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s11.mogucdn.com/mlcdn/c45406/170714_24gib1idaa56f8l731d2706b4lb0j_800x800.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/mlcdn/c45406/170714_29fje1i34jh3j82k65h1b0h7i2i9k_729x640.jpg_750x999.jpg">  
							<img class="fadeIn" src="http://s3.mogucdn.com/p2/170606/upload_5f969c6jf9ic7l37fe8kch1b8ac27_750x335.png_750x999.jpg">  
						</dd> 
					</dl>
				</div>
			</div>
			<div class="shop"></div>
			<!--商品参数-->
			<div class="panel_b">
				<div class="panel-head">
					<span>商品参数</span>
				</div>
				<div class="panel-list">
					<div class="size">
						<table>
		
								<tr>
									<td>尺码</td>
									<td>【M】</td>
									<td>【S】</td>
									<td>【L】</td>
								</tr>
								<tr>
									<td>胸围</td>
									<td>87</td>
									<td>93</td>
									<td>91</td>
								</tr>
								<tr>
									<td>腰围</td>
									<td>72</td>
									<td>68</td>
									<td>76</td>
								</tr>
								<tr>
									<td>裙长</td>
									<td>89-95</td>
									<td>88-94</td>
									<td>90-96</td>
								</tr>
							
						</table>
					</div>
					<div class="size-image">  
						<img src="http://s3.mogucdn.com/p2/170117/upload_5jebi0af8537id564g95ehj0g781k_1125x647.jpg_468x468.jpg">  
						<img src="http://s3.mogucdn.com/p2/170118/upload_00e2357hd57g860f9khakh3a6bbbi_1125x915.png_468x468.jpg">  
						<img src="http://s17.mogucdn.com/p2/170727/10000000_6i23472bhk0llea4hgikfbhdc00ii_1500x3018.jpg_468x468.jpg">  
						<img src="http://s3.mogucdn.com/p2/170118/upload_55c7c64956bfbd75c3ib3j4ik029b_1125x509.png_468x468.jpg">  
					</div>
				</div>
			</div>
			<div class="shop"></div>
			<!--评价-->
			<div class="panel_c">
				<div class="rate-head">
					<a href="" class="tit">购买评价
						<span class="more">更多
						   <i class="arrow">
						   	<img src="https://s10.mogucdn.com/mlcdn/c45406/170711_701e7hcfi1j9fe76hgd560bj28d87_14x22.png" alt="" />
						   </i>
						</span>
					</a>
				</div>
				<div class="rate-list">
					<div class="rate-user">
						<!--<span class="user-info">-->
							<img src="http://s3.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png_100x100.jpg" alt="" />
							<span class="name">能怪淳</span>
						<!--</span>-->
					</div>
					<div class="rate-cont">
						哈哈，收到啦，刚试穿了一下，L码很合身，我虽然长得胖，但是穿着很显瘦，腰部有收腰的效果，而且很显腿长，面料很舒服，穿上很亲肤。
					</div>
					<div class="rate-attr">
						<span class="time">2017-07-24</span>
						<span class="sku">颜色:灰蓝色 尺码:【S】 </span>
					</div>
					<div class="rate-imgs">
						<a href="">
							<img src="http://s3.mogucdn.com/mlcdn/c45406/170724_318c591ga0472ife5if18egkfe255_300x400.jpg_100x100.jpg" alt="" />
						</a>
					</div>
				</div>
			</div>
			<div class="shop"></div>
			<!--热卖推荐-->
			<div class="panel_d">
				<div class="mend">
					<span>热卖推荐</span>
				</div>
				<div class="list">
            <ul class="list_ch clearfix">
                <li>
                    <a href="#/detail">
						<img src="http://s3.mogucdn.com/p2/170719/upload_6ag65c1lh04beda6b4kc706925cb5_640x900.jpg_320x999.webp">
						<p class="li_title">2017夏季新款韩版宽松中长款拼接竖条纹a字裙荷叶边连衣裙女</p>
						<p class="mo_price">￥68.75 <span class=" collect"></span></p>
					</a>
                </li>
                <li>
                    <a href="#">
						<img src="http://s3.mogucdn.com/p2/170719/upload_6ag65c1lh04beda6b4kc706925cb5_640x900.jpg_320x999.webp">
						<p class="li_title">2017夏季新款韩版宽松中长款拼接竖条纹a字裙荷叶边连衣裙女</p>
						<p class="mo_price">￥68.75 <span class=" collect"></span><span class="count">456</span></p>
					</a>
                </li>
            </ul>
        </div>
			</div>
		</div>
		<!--底部-->
		<div class="footer">
			<div class="footer_a">
				<ul>
					<li>
						<i class="icon">
							<img src="../img/kefu.png" alt="" />
						</i>
						<span class="text">客服</span>
					</li>
					<li>
						<i class="icon">
							<img src="../img/dianpu.png" alt="" />
						</i>
						<span class="text">店铺</span>
					</li>
					<li>
						<i class="icon">
							<img src="../img/zan1.png" alt="" />
						</i>
						<span class="text">收藏</span>
					</li>
				</ul>
			</div>
			<div class="footer_b">
				<span class="buy-cart">加入购物车</span>
				<span class="buy-now">购买</span>
			</div>
		</div>
		
	</div>
</template>

<script>export default {
	name: 'carrousel',
	data() {
		return {
			swiperOption: {

			}
		}
	},
	computed: {
			goods() {
				return this.$store.state.goods;
				
			}
	},
	methods:{
		mores() {
				this.$store.dispatch("setDetail")
			},
	},
	mounted() {
         this.mores();
	},
}
</script>

<style>
html,body {
	height: 100%;
}

.screen {
	width: 100%;
	height: 100%;
}

.info {
	margin-top: 10px;
}

.info_a {
	line-height: 20px;
	margin-top: 2%;
	color: #424242;
	font-size: 14px;
}

.info_b {
	margin: 11px 6px 6px;
}

.now {
	font-size: 16px;
	color: #f69;
	line-height: 16px;
}

.info_c {
	width: 100%;
	height: 2%;
	margin: 11px 6px 6px;
	overflow: hidden;
}

.item {
	display: block;
	line-height: 12px;
	color: #999;
	font-size: 12px;
	float: left;
	margin-right: 8.5%;
}

.info_d {
	min-height: 53px;
	box-sizing: border-box;
	border-top: 1px solid #999;
	margin: 5% 2% 0 2%;
}

.ing {
	width: 90%;
	height: 3%;
	overflow: hidden;
	font-size: 12px;
	flex-wrap: wrap;
}

.ing li {
	width: 26%;
	height: 4%;
	float: left;
	word-break: keep-all;
	white-space: nowrap;
	box-sizing: border-box;
	margin-top: 6%;
}

.ing li img {
	float: left;
	width: 15%;
	height: 4%;
	vertical-align: middle;
	border: none;
	margin-top: 7%;
	margin-right: 3%;
	margin-left: 3%;
}

.ing li span {
	color: #666;
	vertical-align: middle;
	font-size: 12px;
}

.good {
	display: block;
	width: 2.2%;
	height: 2.2%;
	float: right;
	margin-top: -5%;
}

.shop {
	height: 9px;
	border-top: 1px solid #f2f5f8;
	background: #f2f5f8;
}

.swiper-container {
	width: 100%;
	height: 371px;
}

.swiper-container img {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}

.shop-info {
	overflow: hidden;
	position: relative;
	margin-top: 10px;
	padding: 0 2%;
}

.fix {
	height: 3%;
	box-sizing: border-box;
	overflow: hidden;
}

.fix_a {
	width: 13%;
	height: 40px;
	float: left;
	text-decoration: none;
}

.fix_a img {
	width: 100%;
	height: 100%;
	border: 1px solid #ddd;
	border-radius: 50%;
}

.fix_b {
	width: 85%;
	float: left;
	overflow: hidden;
}

.title {
	width: 30%;
	height: 3%;
	font-size: 14px;
	margin-top: 3%;
	margin-left: 2%;
}

.not {
	float: right;
	width: 20%;
	height: 3%;
	text-align: center;
	background: #f69;
	color: #fff;
	font-size: 12px;
	border-radius: 16px;
	margin-top: -8%;
}

.content {
	height: 5%;
	display: flex;
	margin-top: 1%;
	margin-bottom: 2%;
	font-size: 16px;
	color: #333;
	-webkit-box-align: center;
	align-items: center;
	text-align: right;
}

.sale {
	width: 17%;
	height: 5%;
	display: inline-block;
	font-size: 14px;
	margin-right: 6%;
	max-height: 20%;
}

.all {
	width: 25%;
	height: 5%;
	display: inline-block;
	font-size: 14px;
	padding-right: 8%;
	max-height: 20%;
	border-right: 1px solid #eee;
}

.content span {
	font-family: "微软雅黑";
	font-size: 14px;
}

.count {
	width: 40%;
	margin-left: -1%;
	line-height: 1.7;
}

.count li span {
	color: #666;
	font-size: 12px;
	display: inline-block;
	vertical-align: middle;
}

.count li em {
	color: #f13e3a;
	font-size: 12px;
	margin-left: -3%;
	display: inline-block;
	min-width: 3%;
}

.count li i {
	color: #f13e3a;
	font-size: 12px;
	margin-left: -2.5%;
	width: 2%;
	height: 2%;
	text-align: center;
	line-height: 11px;
}

.goshop {
	width: 100%;
	height: 3%;
	text-align: center;
	margin-bottom: 6%;
}

.goshop a {
	display: inline-block;
	width: 40%;
	height: 26px;
	border-radius: 18px;
	color: #666;
	font-size: 12px;
	background: #f2f5f8;
	line-height: 26px;
}

.tab {
	width: 100%;
	height: 10%;
}

.tab_a {
	margin-top: 4%;
	height: 5%;
}

.tabs {
	display: -webkit-box;
	-webkit-box-orient: horizontal;
	-webkit-box-align: center;
}

.tab-item {
	width: 25%;
	padding: 0 2% 3.5% 2%;
	border-bottom: 1px solid #e5e5e5;
}

.tab-item span {
	width: 25%;
	font-weight: 700;
	line-height: 5%;
	color: #333;
	text-align: center;
	font-size: 14px;
	padding-right: 15.2%;
	border-right: 1px solid #e5e5e5;
	font-family: "微软雅黑";
}


/*.tab-item i{
    	width: 8%;
    	display: block;
    	position: absolute;
    	bottom:35%;
    	margin-left:-44%;
    	height: 0.4%;
    	background: #333;
    	left: 50%;
    }*/

.footer {
	overflow: hidden;
	height: 50px;
	/*position: fixed;
	bottom:0;
	left: 50%;*/
	z-index: 10;
	border-top:1px solid #dcdcdc;
}

.footer_a {
	width: 45%;
	height: 50px;
	margin-bottom: 8%;
	margin-left: 2%;
}

.footer_a ul {
	height: 50px;
	overflow: hidden;
	/*margin-top:7%;*/
}

.footer_a li {
	width: 33%;
	height: 15%;
	float: left;
}

.icon {
	display: block;
	width: 16px;
	height: 18px;
	margin-left: 19%;
	margin-top: 18%;
}

.icon img {
	width: 100%;
	height: 100%;
}

.text {
	text-align: center;
	font-size: 12px;
	margin-left: 12%;
}

.footer_b {
	width: 53%;
	height: 50px;
	float: right;
	margin-top: -24%;
}

.buy-cart {
	display: block;
	width: 47%;
	height: 50px;
	line-height: 50px;
	font-size: 12px;
	color: #333;
	background: #ffe817;
	text-align:center;
}
.buy-now{
	display: block;
	margin-left: 47%;
	margin-top: -30%;
	text-align:center;
	color: #fff;
	background: #f69;
	width: 47%;
	height: 50px;
	line-height: 50px;
	font-size: 12px;
}

.panel_a {
	width: 100%;
	overflow: hidden;
}

.prap {
	padding: 0 4%;
}

.start {
	float: left;
	width: 30%;
	height: 1px;
	background: #a3a3a5;
	position: relative;
}

.start i {
	left: 0;
	display: inline-block;
	width: 5px;
	height: 3px;
	background: #000;
	position: absolute;
	top: -5%;
}

.desc {
	padding: 5% 0;
	color: #727272;
	font-size: 12px;
}

.end {
	float: right;
	width: 30%;
	height: 1px;
	background: #a3a3a5;
	position: relative;
}

.end i {
	right: 0;
	display: inline-block;
	width: 5px;
	height: 3px;
	background: #000;
	position: absolute;
	top: -5%;
}

.pics {
	margin-top: 5%;
}

.pic-title {
	height: 30px;
	line-height: 30px;
	text-indent: 3%;
	color: #303030;
	font-weight: 400;
	font-size: 11px;
}

.pic-desc {
	height: 40px;
	line-height: 40px;
	text-indent: 3%;
	color: #727272;
	font-size: 11px;
}

.pic-list {
	width: 100%;
	margin: 0 auto;
}

.pic-list img {
	width: 100%;
	display: block;
	border: none;
	vertical-align: middle;
}

.fadeIn {
	animation: fadeIn .8s easc both;
}

.panel_b {
	box-sizing: border-box;
	margin-top: 5%;
}

.panel-head {
	padding-left: 4%;
	padding-right: 4%;
}

.panel-head span {
	display: block;
	line-height: 4%;
	padding: 4% 0 3%;
	color: #333;
	font-size: 12px;
}

.panel-list {
	box-sizing: border-box;
}

.size {
	background: #fff;
	margin: 4% 4%;
}

.size table {
	width: 100%;
}

.size tr {
	border-bottom: 1px solid #f4f4f4;
}

.size td:first-child {
	width: 53%;
}

.size td {
	font-weight: 400;
	line-height: 38px;
	text-align: left;
	color: #727272;
	padding-right: 10%;
}

.size-image {
	margin-bottom: 15px;
}

.size-image img {
	width: 100%;
	border: none;
	vertical-align: middle;
}

.panel_c {
	overflow: hidden;
	margin: 0 auto;
	background: #fff;
	margin-top: 5%;
}

.rate-head {
	padding-left: 3%;
	padding-right: 3%;
	padding-bottom: 2%;
	border-bottom: 1px solid #E0E0E0;
}

.rate-head .tit {
	padding: 5% 0 4%;
	color: #333;
	font-size: 12px;
	line-height: 4%;
}

.more {
	float: right;
	color: #666;
	font-size: 12px;
	margin-top: 3%;
}

.arrow {
	display: block;
	width: 10px;
	height: 10px;
	float: right;
	margin-top: -13%;
	padding-left: 6%;
}

.arrow img {
	width: 100%;
	height: 100%;
}

.rate-list {
	padding-left: 3%;
	padding-right: 3%;
}


/*.user-info{
     	width:30%;
     	height: 35px;
     	display: inline-block;
     	line-height: 5%;
     }*/

.rate-user {
	margin-top: 4%;
}

.rate-user img {
	width: 35px;
	height: 35px;
	border: 1px solid #efefef;
	border-radius: 50%;
}

.name {
	margin-left: 16%;
	margin-top: -9%;
	float: left;
	color: #424242;
	font-size: 12px;
	vertical-align: middle;
}

.rate-cont {
	height: 20%;
	margin-top: 5%;
	color: #727272;
	font-size: 12px;
}

.rate-attr {
	line-height: 12px;
	margin-top: 2%;
}

.time {
	color: #999;
	font-size: 12px;
}

.sku {
	margin-left: 2%;
	color: #999;
	font-size: 12px;
}

.rate-imgs {
	overflow: hidden;
	margin-top: 2%;
}

.rate-imgs a {
	width: 20%;
	display: inline-block;
	margin-bottom: 2%;
	margin-right: 2%;
}

.rate-imgs a img {
	width: 100%;
	border: none;
}

.panel_d {
	overflow: hidden;
}

.mend {
	padding-left: 3%;
	padding-right: 3%;
}

.mend span {
	display: block;
	line-height: 30px;
	padding: 3% 0 2%;
	color: #333;
	font-size: 2%;
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
</style>