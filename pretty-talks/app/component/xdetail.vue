<template>
    <div class="screen">
        <!--轮播图-->
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(g,index) of gooding['itemInfo']['topImages']" :key="index"><img :src="g" alt="" /></swiper-slide>
            <!-- <swiper-slide><img :src="gooding.itemInfo.topImages[0]" alt="" /></swiper-slide>
            <swiper-slide><img :src="gooding.itemInfo.topImages[1]" alt="" /></swiper-slide>
            <swiper-slide><img :src="gooding.itemInfo.topImages[2]" alt="" /></swiper-slide>
            <swiper-slide><img :src="gooding.itemInfo.topImages[3]" alt="" /></swiper-slide>
            <swiper-slide><img :src="gooding.itemInfo.topImages[4]" alt="" /></swiper-slide> -->
            <div class="swiper-pagination choose" slot="pagination">
            </div>
        </swiper>
        <!--商品详情-->
        <div class="info">
            <div class="info_a">
                {{gooding['itemInfo'].title}}
            </div>
            <div class="info_b">
                <span class="now">{{gooding['itemInfo'].price}}</span>
            </div>
            <div class="info_c">
                <span class="item">{{gooding.columns[0]}}</span>
                <span class="item">{{gooding.columns[1]}}</span>
                <span class="item">{{gooding['itemInfo'].extra.deliveryTime}}小时发货</span>
                <span class="item">{{gooding['itemInfo'].extra.sendAddress}}</span>
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
                <img src="https://s10.mogucdn.com/mlcdn/c45406/170711_701e7hcfi1j9fe76hgd560bj28d87_14x22.png" @click="openBottomSheet" alt="" class="good" />
            </div>
            <div>
                <!--<mu-raised-button @click="openBottomSheet" label="Open Bottom Sheet" />-->
                <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
                    <mu-list @itemClick="closeBottomSheet">
                        <mu-list-item title="超时赔付" />
                        <span class="ccc">您支付后会在预定时间内发出，若未按照约定发货，交易完成后可获得5/10元优惠券补贴</span>
                        <mu-list-item title="全场包邮" />
                        <span class="ccc">所有商品均享受包邮，您不用承担任何发货运费</span>
                        <mu-list-item title="退货补运费" />
                        <span class="ccc">您退货产生的运费会以5/10元现金形式返还到您美丽说的钱包中</span>
                        <mu-list-item title="7天无忧退货" />
                        <span class="ccc">商品签收起7天内如不满意您可申请无理由退货，免除您的后顾之忧 </span>
                        <div class="btn" :open="bottomSheet" @click="closeBottomSheet">完成</div>
                    </mu-list>
                </mu-bottom-sheet>
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
                <ul class="tab clearfix">
                    <li class="tab-item">
                        <span v-settop="'panel_a'">图文详情</span>
                        <i></i>
                    </li>
                    <li class="tab-item">
                        <span v-settop="'panel_b'">商品参数</span>
                        <i></i>
                    </li>
                    <li class="tab-item">
                        <span v-settop="'panel_c'">评价()</span>
                        <i></i>
                    </li>
                    <li class="tab-item">
                        <span v-settop="'panel_d'">热卖推荐</span>
                        <i></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="panel">
            <!--图文详情-->
            <div class="panel_a">
                <!--主题-->
                <div class="prap">
                    <p class="start"><i></i></p>
                    <p class="desc">夏季新品甜美多色拼接裹胸式吊带高腰复古显瘦中长款连衣裙 S254</p>
                    <p class="end"><i></i></p>
                </div>
                <!--详情-->
                <div class="pics">
                    <dl class="pic-box">
                        <dt class="pic-title">{{gooding.detailInfo.detailImage[0].key}}</dt>
                        <dt class="pic-desc">{{gooding.detailInfo.detailImage[0].desc}} </dt>
                        <dd class="pic-list">
                            <img class="fadeIn" v-for="(rute,index) in rus" :src="rute" :key="index">
                            <!--<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[1].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[2].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[3].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[4].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[5].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[6].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[7].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[8].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[9].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[10].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[11].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[12].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[13].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[14].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[15].list}}">  
							<img class="fadeIn" :src="{{gooding.detailInfo.detailImage[16].list}}">  -->
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
                <div class="rate-root" v-does="cuss">暂无评价</div>
                <div class="rate-list">
                    <div class="rate-user">
                        <!--<span class="user-info">-->
                        <img :src="cuss[0].image==null?'':cuss[0].image" alt="" />
                        <span class="name">{{cuss[0].name=='null'?'':cuss[0].name}}</span>
                        <!--</span>-->
                    </div>
                    <div class="rate-cont">
                        {{cuss[0].title==null?'':cuss[0].title}}
                    </div>
                    <div class="rate-attr">
                        <span class="time">{{cuss[0].time==null?'':cuss[0].time}}</span>
                        <span class="sku">颜色:{{cuss[0].color==null?'':cuss[0].color}} 尺码:【{{cuss[0].size==null?'':cuss[0].size}}】 </span>
                    </div>
                    <div class="rate-imgs">
                        <a href="">
							<img :src="cuss[0].img==null?'':cuss[0].img" alt="" />
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
                        <li v-for="item in this.men">
                            <a href="#/detail">
								<img :src="item.image ">
								<p class="li_title">{{item.title}}</p>
								<p class="mo_price">{{item.price}} <span class=" collect"></span></p>
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
                    <li @click="Cool()">
                        <i class="icon">
							<img :src="src"  alt="" />
						</i>
                        <span class="text">收藏</span>
                    </li>
                </ul>
            </div>
            <div class="weui-toast" style="display: none;">
                <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                <p class="weui-toast__content">已收藏</p>
            </div>
            <div class="footer_b">
                <span class="buy-cart" @click="openSheet">加入购物车</span>
                <span class="buy-now">购买</span>
            </div>
            <div class="login" v-show="isshowload">
                请登录
            </div>
        </div>
        <!--<div class="car">-->
        <mu-bottom-sheet :open="Sheet" @close="closeSheet">
            <mu-list @itemClick="Sheet">
                <div class="car_a">
                    <div class="cart">
                        <img :src="gooding['itemInfo']['topImages'][0]" alt="" />
                    </div>
                    <div class="show">
                        <span class="show_a">小翻领花边线排扣九分袖雪纺衫上衣</span>
                        <div class="show_b">
                            <span class="price_a">¥60.00</span>
                            <span class="price_b">库存
					 	<span class="qty">99</span> 件
                            </span>
                        </div>
                    </div>
                    <span class="close">╳</span>
                </div>
                <div class="scoll">
                    <div class="sku-list">
                        <div class="list_a">
                            <p>颜色：</p>
                            <span class="yanse">白色</span>
                        </div>
                        <div class="list_b">
                            <p>尺码：</p>
                            <span class="yanse">均码</span>
                        </div>
                    </div>
                    <div class="sku-num">
                        <p class="title">数量：</p>
                        <div class="counter">
                            <span class="counter_a">
							<b class="counter_a_a" @click="del()">－</b>
						</span>
                            <em class="counter_a_b">{{num}}</em>
                            <span class="counter_a">
							<b class="counter_a_c" @click="add()">＋</b>
						</span>
                        </div>
                    </div>
                </div>
                <div class="action" :open="Sheet" @click="closeSheet">
                    <span class="confirm">确定</span>
                </div>
            </mu-list>
        </mu-bottom-sheet>
        <!--</div>-->
    </div>
</template>
<script>
export default {
    name: 'carrousel',
    data() {
        return {
            swiperOption: {

            },
            bottomSheet: false,
            Sheet: false,
            noon: true,
            src: require("../img/zan1.png"),
            id: null,
            watch: true,
            isshowload: false,
            num: 1,
            gooding: [],
            // cuss:[],
            rus: [],
            men: []
        }
    },
    computed: {
        cuss() {
            //				console.log(this.$store.state.cuss)

            return this.$store.state.cuss;
        },
    },
    methods: {
        setDetail() {
            this.$ajax.get("http://localhost:999/main", {
                    params: {
                        iid: this.$route.params.iid
                    }
                }).then((response) => {
                    // console.log(response)
                    this.gooding = response.data.result
                    this.rus = response.data.result.detailInfo.detailImage['0'].list
                    // console.log(state.gooding)
                    // console.log(this.rus,response.data.result.detailInfo.detailImage['0'])
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        discuss() {
            this.$store.dispatch("setCuss")
        },
        collect() {
            this.$store.dispatch("setColl")
        },
        closeBottomSheet() {
            this.bottomSheet = false
        },
        openBottomSheet() {
            this.bottomSheet = true
        },
        closeSheet() {
            this.Sheet = false;
            //点击加入购物车
            var all = this.gooding;
            console.log(this.gooding)
            this.$ajax.get("http://localhost:999/addcar", {
                    params: {
                        imgUrl: all['itemInfo'].topImages[0],
                        title: all['itemInfo'].title,
                        color: '白色',
                        size: '均码',
                        num: this.num,
                        price: all['itemInfo'].price.slice(1) * 1,
                        origin_price: all['itemInfo'].lowPrice,
                        user_id: this.id,
                    }
                }).then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        openSheet() {
            this.Sheet = true;
            var cookies = document.cookie;
            var id;
            if (cookies == '') {
                this.isshowload = true;
            } else {
                this.isshowload = false;
                id = cookies.split('=')[1];
                // console.log(id)
                // 发送ajax请求

            }
        },

        Cool() {
            // this.watch = !this.watch
            // if (this.src == require("../img/zan1.png")) {
            //     this.src = require("../img/zan2.png")
            //     document.querySelector('.weui-toast').style.display = 'block'
            // } else if (this.src == require("../img/zan2.png")) {
            //     this.src = require("../img/zan1.png")
            //     document.querySelector('.weui-toast').style.display = 'none'
            // }

            // var res;
            // res = this.$route.params.iid
            // // console.log(res)
            // this.$ajax.get("http://localhost:999/collect", {
            //         params: {
            //             id: this.id,
            //             iid: res,
            //         }
            //     }).then((response) => {

            //     })
            //     .catch((error) => {
            //         // console.log(error)
            //     })
        },
        remen() {
            this.$ajax.get("http://localhost:999/man", {
                params: {

                }
            }).then((response) => {
                //					console.log(response)
                response.data.forEach((item, idx) => {
                    if (item.hot >= 1) {
                        this.men.push(item)
                    }

                })
                this.men = this.men.slice(0,20)
                //					console.log(this.men)
            }).catch((error) => {
                console.log(error)
            })
        },

        add() {
            this.num++;
        },
        del() {

            if (this.num <= 1) {
                alert('加入购物车数不能为小于1');
                return false
            }
            this.num--;

        },
        addcarss() {}
    },


    mounted() {
        this.$store.state.iid = this.$route.params.iid; //			console.log(this.$store.state.iid)
        this.setDetail();
        this.discuss();
        this.collect();
        this.remen();
        this.id = document.cookie.split('=')[1];
    },
    directives: {
        does: {
            bind: function(el, binding, vnode) {
                setTimeout(function() {
                    if (binding.value == 'id为空') {
                        el.style.display = 'block';
                        document.querySelector('.rate-list').style.display = 'none';
                    } else {
                        el.style.display = 'none';
                        document.querySelector('.rate-list').style.display = 'block';
                    }
                }, 20)

            }
        },
        settop: {
            bind: function(el, binding) {
                el.onclick = function() {
                    setTimeout(function() {
                        document.body.scrollTop = document.querySelector(`.${binding.value}`).offsetTop;

                        // document.querySelector(`.${binding.value}`).offsetTop
                    }, 30)


                }
            }
        }
    }
}
</script>
<style scoped>
html,
body {
    
}

.screen {
	background: #fff;
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
    margin-right: 8.1%;
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
    margin-right: 2%;
}

.shop {
    height: 9px;
    border-top: 1px solid #f2f5f8;
    background: #f2f5f8;
}

.swiper-container {
    width: 80%;
    height: 371px;
}

.swiper-container img {
    /*width: 80%;*/
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
    height: 6%;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
}

.tab-item {
    float: left;
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
    border-top: 1px solid #dcdcdc;
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
    height: 60px;
    line-height: 60px;
    font-size: 12px;
    color: #333;
    background: #ffe817;
    text-align: center;
}

.buy-now {
    display: block;
    margin-left: 47%;
    margin-top: -29%;
    text-align: center;
    color: #fff;
    background: #f69;
    width: 53%;
    height: 60px;
    line-height: 60px;
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

.ccc {
    padding: 0 5%;
    text-align: center;
}

.btn {
    background: #f69;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    margin-top: 4%;
}

.rate-root {
    padding: 5% 5%;
}

.car_a {
    margin: 0 2%;
    display: -webkit-box;
    background: #fff;
    padding: 2% 0;
    border-bottom: 1px solid #f2f5f8;
    overflow: auto;
}

.cart {
    display: block;
    width: 22%;
    height: 6%;
    position: relative;
}

.cart img {
    width: 100%;
    height: 100%;
}

.show {
    margin-left: 3%;
    width: 57%;
    height: 20%;
    display: block;
}

.price_a {
    color: #f69;
    font-size: 14px;
}

.price_b {
    font-size: 14px;
}

.list_a {
    margin-top: 4%;
    border-bottom: 1px solid #f2f5f8;
}

.yanse {
    color: #fff;
    background-color: #f69;
    display: inline-block;
    height: 5%;
    padding: 0 15px;
    margin-right: 3%;
    margin-bottom: 3%;
    font-size: 14px;
}

.list_b {
    margin-top: 4%;
    border-bottom: 1px solid #f2f5f8;
}

.sku-num {
    margin-bottom: 15px;
}

.title {
    line-height: 16px;
    margin-bottom: 7px;
}

.counter {
    height: 6%;
}

.counter_a {
    width: 4%;
    height: 27px;
    background-color: #f8f8f8;
    display: inline-block;
    text-align: center;
    line-height: 27px;
}

.counter_a_b {
    color: #333;
    width: 4%;
    height: 27px;
    background-color: #f8f8f8;
    display: inline-block;
    text-align: center;
    line-height: 27px;
}

.counter_a_c {
    width: 4%;
    height: 27PX;
    background-color: #f8f8f8;
    display: inline-block;
    text-align: center;
    line-height: 27px;
}

.confirm {
    font-size: 14px;
    text-align: center;
    color: #fff;
    background-color: #f69;
    display: block;
    height: 39px;
    line-height: 39px
}

.close {
    color: #bbb;
    font-size: 14px;
    font-family: serif;
    position: absolute;
    right: 2%;
    top: 2%;
    text-align: right;
    cursor: pointer;
    width: 3%;
    height: 30px;
}

.login {
    background: rgba(0, 0, 0, .5);
    width: 100px;
    height: 30px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -45px;
    line-height: 30px;
    text-align: center;
    color: #fff;
}
</style>