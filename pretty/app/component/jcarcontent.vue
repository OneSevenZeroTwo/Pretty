<template>
    <div>
        <header class="page_head">
            <div class="back_icon" id="back_btn">
                <a href="javascript:history.go(-1)">
                    <img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png">
                </a>
            </div>
            <div class="right_btn js-action" data-action="removeSelected" @click="isDelListAll">删除</div>
            <div class="title">
                <a href="javascript:;">购物车</a>
            </div>
        </header>
        <div class="cart">
            <div class="cart_list" v-show="carListNone" data-shopid="1172jnw8">
                <div class="shop_title order_info" :class="{folded:!carListShow}" id="shop_1172jnw8">
                    <div class="box_btn">
                        <input type="checkbox" v-model="isAllChecked" class="select_shop" id="select_1172jnw8">
                        <label for="select_1172jnw8"></label>
                    </div>
                    <div class="shop_name">
                        <a href="#/index">店铺：美丽优选</a>
                    </div>
                    <div class="fold_btn js-action" @click="isCarListShow" data-action="fold">展开</div>
                    <div class="shop_tatol_price">合计：
                        <span class="shop_price_text">{{totalPrice|currecy}}</span>
                    </div>
                </div>
                <ul class="order_goods_list" v-show="carListShow">
                    <li id="" class="goods" v-if="delList" v-for="(list,index) in carList">
                        <div class="box_btn">
                            <input type="checkbox" v-model="isChecked" :value="list.id" class="select_goods" :id="list.id">
                            <label :for="list.id"></label>
                        </div>
                        <div class="main">
                            <a class="pic_wrap lazyload-img-end" href="javascript:;" :style="'background-image: url('+list.imgUrl+'); background-size: cover;'">
                            </a>
                            <div class="middle">
                                <a href="javascript:;">
                                    <p class="title">{{list.title}}</p>
                                </a>
                                <p class="prop">
                                    <span class="first">颜色：{{list.color}}</span>
                                    <span class="size">尺码：{{list.size}}</span>
                                </p>
                                <div class="numBox">
                                    <div class="minus" @click="changeNum(index,-1)">-</div>
                                    <input type="text" class="js-amount amount nums" data-ori="1" data-max="495" :value="list.num" readonly="">
                                    <div class="add plus" @click="changeNum(index,1)">+</div>
                                    <div class="nums_mask"></div>
                                </div>
                            </div>
                            <div class="right">
                                <p class="goods_price" data-price="52.80">{{list.price|currecy}}</p>
                                <p class="origin_price">{{list.origin_price|currecy}}</p>
                                <div class="delete_btn js-action" @click="isDelList(index)" data-action="removeSingle">删除</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="none" v-show="!carListNone">
                <div class="none_info">
                    <p>您的购物车还空着呢，</p>
                    <p>美物这么多，快去看看吧～</p>
                    <a href="/index" class="btn">去逛逛</a>
                </div>
            </div>
            <div class="windowDrive" v-show="isDeleteOneShow">
                <div class="mask"></div>
                <div class="dialog" id="alert" style="top: 22.0009%;">
                    <div class="dialog-con">确定要删除该商品吗</div>
                    <div class="dialog-btn">
                        <span class="sureBtn" @click="delOneY">确认</span>
                        <span class="sureBtn" @click="delOneN">取消</span>
                    </div>
                </div>
            </div>
            <div class="windowDrive" v-show="isDeleteAllShow">
                <div class="mask"></div>
                <div class="dialog" id="alert" style="top: 22.0009%;">
                    <div class="dialog-con">确定要删除这些商品吗</div>
                    <div class="dialog-btn">
                        <span class="sureBtn" @click="delAllY">确认</span>
                        <span class="sureBtn" @click="delAllN">取消</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="float_ctrl_wrap" v-show="carListNone">
            <div id="float_ctrl" class="float_ctrl">
                <div class="goods_check_box">
                    <div class="box_btn">
                        <input type="checkbox" v-model="isAllChecked" class="select_all" id="select_all">
                        <label for="select_all"></label>
                    </div>
                    <span>全选</span>
                </div>
                <a :href="href" @click="toPayment">
                    <input class="go_charge js-action js-charge-num" type="submit" :value="totalNum!=0?'去结算('+totalNum+')':'去结算'">
                </a>
                <div class="order_msg">
                    <p class="price">合计：<span class="total_price">{{totalPrice|currecy}}</span></p>
                    <p class="num msg">不含运费、优惠扣减</p>
                </div>
            </div>
        </div>
        <div class="prompt_wrap" :class="{prompt_wrap_show:isPrompt,prompt_wrap_hide:!isPrompt}">
            <div class="prompt_cont">{{promptCont}}</div>
        </div>
        <div class="windowDrive" v-show="isMaskShow">
            <div class="mask"></div>
            <div class="dialog" id="alert" style="top: 22.0009%;">
                <div class="dialog-con">非常抱歉，您还未登陆，请先登录后查看</div>
                <div class="dialog-btn" @click="goBack">
                    <span class="sureBtn">确认</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                carListShow: true,
                carListNone: true,
                delList: true,
                isPrompt: false,
                isNoPrompt: false,
                promptCont: "",
                isChecked: [],
                isMaskShow: false,
                isDeleteOneShow: false,
                isDeleteAllShow: false,
                isDelIndex:null,
                href: "javascript:;",

            }
        },
        methods: {
            //显示/隐藏 列表
            isCarListShow() {
                this.carListShow = !this.carListShow
            },
            delOneY() {
                var index = this.isDelIndex;
                this.isDeleteOneShow = false;
                this.$store.state.carProId = this.$store.state.carList[index].id;
                this.$store.state.carList.splice(index, 1);
                this.$store.dispatch("delCarList");
            },
            delAllY() {
                this.isDeleteAllShow = false;
                this.isChecked.forEach((item, idx) => {
                    this.$store.state.carList.forEach((goods, index) => {
                        if (item == goods.id) {
                            this.$store.state.carList.splice(index, 1);
                            this.$store.state.carProId = goods.id;
                            this.$store.dispatch("delCarList");
                        }
                    })
                })
                this.isChecked = [];
            },
            delOneN() {
                this.isDeleteOneShow = false;
                return false
            },
            delAllN() {
                this.isDeleteAllShow = false;
                return false
            },
            //删除单个物品
            isDelList(index) {
                this.isDeleteOneShow = true;
                this.isDelIndex = index;
            },
            // 删除选中项
            isDelListAll() {
                if (this.isChecked.length == 0) {
                    this.promptShow();
                    this.promptCont = "你没有选中任何商品";
                }else{
                    this.isDeleteAllShow = true;                    
                }
            },
            //商品数量减
            changeNum(index, numChange) {
                if (numChange == -1) {
                    this.$store.state.carList[index].num--;
                    if (this.$store.state.carList[index].num <= 1) {
                        this.$store.state.carList[index].num = 1
                        this.promptShow();
                        this.promptCont = "数量不能小于1";
                    } else {
                        this.$store.state.carProId = this.$store.state.carList[index].id;
                        this.$store.state.carProNum = this.$store.state.carList[index].num;
                        this.$store.dispatch("setCarListNum");
                    }

                } else if (numChange == 1) {
                    this.$store.state.carList[index].num++;
                    if (this.$store.state.carList[index].num >= 100) {
                        this.$store.state.carList[index].num = 100
                        this.promptShow();
                        this.promptCont = "数量不能大于100"
                    } else {
                        this.$store.state.carProId = this.$store.state.carList[index].id;
                        this.$store.state.carProNum = this.$store.state.carList[index].num;
                        this.$store.dispatch("setCarListNum");
                    }
                }
            },
            // 显示提示信息，2s后隐藏
            promptShow() {
                clearInterval(timer);
                var timer = setTimeout(() => {
                    this.isPrompt = false;
                    clearInterval(timer);
                }, 1500);
                this.isPrompt = true;
            },
            // 去订单页
            toPayment() {
                if (this.isChecked.length == 0) {
                    this.href = "javascript:;";
                    return;
                } else {
                    this.isChecked.forEach((item, idx) => {
                        this.$store.state.carList.forEach((goods, index) => {
                            if (item == goods.id) {
                                this.$store.state.carProId = goods.id;
                                this.$store.dispatch("setCarListOrder");
                            }
                        })
                    })
                    this.href = "#/order";
                }
            },
            goBack() {
                window.location.href = "#/mycenter";
                this.isMaskShow = false;
                this.carListNone = true;
            }
        },
        mounted() {
            // if (document.cookie.split("=")[1]) {
                this.$store.state.user_id = document.cookie.split("=")[1];
                //发送给actions，调用mutations里的getCarList函数通过axios.get获取数据
                this.$store.dispatch("getCarList");
                // 如果不清空，返回该页面后列表会累加
                this.$store.state.isChecked = [];
                this.$store.state.carList = [];
            // } else {
            //     this.carListNone = false;
            //     this.isMaskShow = true;
            // }
        },
        computed: {
            //获取数据列表
            carList() {
                if (this.$store.state.carList.length == 0) {
                    this.carListNone = false;
                } else {
                    this.carListNone = true;
                }
                this.isChecked = this.$store.state.carList.map(function(item) {
                    return item.id;
                });
                return this.$store.state.carList
            },
            //全选/全不选
            isAllChecked: {
                get() {
                    return this.checkedCount == this.$store.state.carList.length;
                },
                set(value) {
                    if (value) {
                        this.isChecked = this.$store.state.carList.map(function(item) {
                            return item.id;
                        });
                    } else {
                        this.isChecked = [];
                    }
                }
            },
            checkedCount: {
                get() {
                    return this.isChecked.length;
                }
            },
            //计算总价
            totalPrice() {
                var total = 0;
                this.$store.state.carList.forEach((goods) => {
                    //如果选中，计算总价
                    if (this.isChecked.join("").indexOf(goods.id) != -1) {
                        total += goods.price * goods.num;
                    }
                });
                return total;
            },
            totalNum() {
                var total = 0;
                this.$store.state.carList.forEach((goods) => {
                    //如果选中，计算总价
                    if (this.isChecked.join("").indexOf(goods.id) != -1) {
                        total += Number(goods.num);
                    }
                });
                return total;
            }
        },
        filters: {
            currecy(val) {
                var n = parseFloat(val).toFixed(2);
                return "¥" + n;
            }
        }
}
</script>
<style>
body,
html {
    width: 100%;
    background-color: #f4f4f4;
    font-size: 16px;
    color: #666;
}

.page_head {
    height: 55px;
    width: 100%;
    text-align: center;
    color: #333;
    line-height: 55px;
    border-bottom: 1px solid rgba(51, 51, 51, .15);
}

.cart_list,
.page_head {
    background-color: #fff;
    overflow: hidden;
}

.page_head .back_icon {
    z-index: 5;
    float: left;
    text-align: left;
    vertical-align: middle;
    width: 65px;
    height: 55px;
    padding-left: 17px;
}

.page_head .back_icon img {
    width: 12px;
    display: inline-block;
    margin-top: 16px;
}

.page_head .right_btn {
    z-index: 5;
    font-size: 20px;
    float: right;
    padding-right: 17px;
    height: 55px;
}

.page_head .title {
    z-index: 1;
    text-align: center;
}

.page_head .title a {
    font-size: 20px;
    color: #666;
    text-decoration: none;
}

.order_list_list {
    padding-bottom: 30px;
}

.cart_list {
    margin-bottom: 5px;
}

.cart_list,
.page_head {
    background-color: #fff;
    overflow: hidden;
}

.shop_title {
    padding: 18px 3.2% 18px 4.8%;
    overflow: hidden;
}

.shop_title .box_btn {
    width: 26px;
    margin-right: 3.47%;
    overflow: hidden;
}

.shop_title .fold_btn {
    float: right;
    width: 5.5%;
    /*19px*/
    margin-left: 3.47%;
    /*12px*/
    text-indent: -9999px;
    background: url(http://d03.res.meilishuo.net/pic/_o/f5/3d/52158d5a318a12602373182f3899_200_400.cf.png) no-repeat 0 -8%;
    background-size: 300%;
}

.folded .fold_btn {
    background: url(http://d03.res.meilishuo.net/pic/_o/f5/3d/52158d5a318a12602373182f3899_200_400.cf.png) no-repeat 98% -9%;
    background-size: 300%;
}

.shop_title>div {
    float: left;
    line-height: 26px;
}

.shop_title .shop_name {
    font-size: 16px;
    max-width: 47.8%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.shop_title .shop_tatol_price {
    float: right;
}

.shop_title .shop_tatol_price span {
    color: #ff7a9a;
}

.order_goods_list {
    border-top: 1px solid rgba(51, 51, 51, .2);
}

.order_goods_list .goods {
    width: 95%;
    margin-left: 4.8%;
    padding: 4.8%;
    /*18px*/
    padding-left: 0;
    overflow: hidden;
    border-bottom: 1px solid rgba(51, 51, 51, .2);
}

.order_goods_list .box_btn {
    width: 7.6%;
    height: 26px;
    margin-top: 23px;
    float: left;
}

.order_goods_list .main {
    float: left;
    margin-left: 3.5%;
    width: 88.4%;
}

.order_goods_list .main .pic_wrap {
    position: relative;
    float: left;
    margin-right: 4%;
    width: 23.41%;
    height: 70px;
    background-size: contain;
}

.lazyload-img-end {
    opacity: 1;
}

.order_goods_list .main .middle {
    width: 52.84%;
    float: left;
}

.order_goods_list .main .title {
    height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 14px;
    line-height: 14px;
}

.order_goods_list .main .prop {
    font-size: 10px;
    color: #999;
    margin: 5px 0 0;
    overflow: hidden;
}

.order_goods_list .main .prop span {
    float: left;
    padding-bottom: 3px;
}

.order_goods_list .main .first {
    margin-right: 3px;
}

.order_goods_list .main .numBox {
    position: relative;
}

.order_goods_list .main .minus,
.order_goods_list .main .plus {
    float: left;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(204, 194, 201, .6);
    text-align: center;
    line-height: 28px;
}

.order_goods_list .main .minus {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    text-indent: -999em;
    background: url(http://d03.res.meilishuo.net/pic/_o/f5/3d/52158d5a318a12602373182f3899_200_400.cf.png) no-repeat -12% 54%;
    background-size: 220%;
}

.order_goods_list .main .plus {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    text-indent: -999em;
    background: url(http://d03.res.meilishuo.net/pic/_o/f5/3d/52158d5a318a12602373182f3899_200_400.cf.png) no-repeat 126% 55%;
    background-size: 200%;
}

.order_goods_list .main .nums {
    border: 0;
    margin: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    outline: 0;
    padding: 0;
    -webkit-appearance: none;
    float: left;
    line-height: 28px;
    width: 41px;
    text-align: center;
    font-size: .28rem;
    color: #80737b;
}

.order_goods_list .main .nums_mask {
    position: absolute;
    top: 0;
    left: 28px;
    width: 41px;
    height: 28px;
    border-top: 1px solid rgba(204, 194, 201, .6);
    border-bottom: 1px solid rgba(204, 194, 201, .6);
}

.order_goods_list .main .right {
    position: relative;
    float: right;
    text-align: right;
}

.order_goods_list .main .right .goods_price {
    color: #ff7a9a;
    height: 14px;
}

.order_goods_list .main .right .origin_price {
    margin: 7px 0 12px;
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
    padding-left: 1px;
    height: 12px;
}

.order_goods_list .main .right .delete_btn {
    position: absolute;
    right: -.5px;
    bottom: -20px;
    height: 30px;
    width: 52px;
    text-align: left;
    text-indent: -999em;
    background: url(http://d03.res.meilishuo.net/pic/_o/f5/3d/52158d5a318a12602373182f3899_200_400.cf.png) no-repeat -480% 101%;
    background-size: 113%;
}

.none_info {
    text-align: center;
    padding-top: 58px;
}

.none_info p {
    line-height: 16px;
}

.none_info .btn {
    display: block;
    width: 24%;
    margin-left: auto;
    margin-right: auto;
    padding: 11px 0;
    margin-top: 24px;
}

.float_ctrl_wrap .go_charge,
.none_info .btn {
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background-color: #f66;
    color: #fff;
}

.float_ctrl_wrap {
    position: relative;
    z-index: 10;
}

.float_ctrl_wrap .float_ctrl {
    position: fixed;
    bottom: 54px;
    left: 0;
    width: 100%;
    padding: 12px 18px;
    background-color: #fff;
    border-top: 1px solid rgba(51, 51, 51, .2);
}

.float_ctrl_wrap .goods_check_box {
    float: left;
    margin-top: 5px;
    line-height: 26px;
    font-size: 12px;
    color: #666;
}

.float_ctrl_wrap .goods_check_box .box_btn {
    width: 48%;
    height: 26px;
    float: left;
    margin-right: 3px;
}

.float_ctrl_wrap .goods_check_box .box_btn input,
.order_goods_list .box_btn input,
.shop_title .box_btn input {
    margin-left: -100em;
}

input,
select {
    vertical-align: middle;
}

.float_ctrl_wrap .goods_check_box .box_btn input:checked+label,
.order_goods_list .box_btn input:checked+label,
.shop_title .box_btn input:checked+label {
    background-image: url(http://d04.res.meilishuo.net/pic/_o/30/15/4f618255837f268c2dd9df55b201_88_89.cg.png);
}

.float_ctrl_wrap .goods_check_box .box_btn label,
.order_goods_list .box_btn label,
.shop_title .box_btn label {
    float: left;
    width: 26px;
    height: 26px;
    background: url(http://d03.res.meilishuo.net/pic/_o/ac/80/9e6369e43570c2168179aa82fa34_88_88.ch.png) center no-repeat;
    background-size: 100%;
}

.float_ctrl_wrap .goods_check_box span {
    display: inline-block;
}

.float_ctrl_wrap .go_charge {
    float: right;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    border: 0;
    text-align: center;
    width: 29.5%;
}

.float_ctrl_wrap .order_msg {
    float: right;
    margin-right: 3.4%;
    font-size: 14px;
}

.float_ctrl_wrap .order_msg .price {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 14px;
}

.float_ctrl_wrap .order_msg .price span {
    font-size: 16px;
}

.float_ctrl_wrap .order_msg span {
    color: #ff7a9a;
}

.float_ctrl_wrap .order_msg .msg {
    color: #999;
    font-size: 12px;
    line-height: 12px;
}

.prompt_wrap {
    position: fixed;
    top: 46%;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 1111;
    opacity: 0;
}

.prompt_wrap_show {
    display: block;
    opacity: 1;
    transition: all 0.5s ease-out 0s;
}

.prompt_wrap_hide {
    opacity: 0;
    display: none;
    transition: all 0.5s ease-out 0s;
}

.prompt_cont {
    padding: 12px 24px;
    background: #555;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    max-width: 80%;
    line-height: .32rem;
    box-sizing: border-box;
    font-size: 16px;
}

.windowDrive {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 160%;
    z-index: 999;
}

.mask {
    position: fixed;
    top: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .2;
}

.windowDrive .dialog {
    position: relative;
    display: inline-block;
    background-color: #fff;
    width: 270px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    z-index: 10001;
}

.windowDrive .dialog-con {
    text-align: center;
    color: #000;
    padding: 20px;
}

.windowDrive .dialog-btn {
    text-align: center;
    line-height: 45px;
    border-top: 1px solid #d9d9d9;
}

.windowDrive .dialog-btn span {
    color: #f36;
    box-sizing: border-box;
    display: inline-block;
}

.windowDrive .sureBtn {
    text-align: center;
    width: 40%;
}
</style>
