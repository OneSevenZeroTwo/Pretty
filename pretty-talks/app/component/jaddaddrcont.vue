<template>
	<div class="addr_new">
		<header class="page_head">
			<div class="back_icon" id="back_btn">
				<a href="javascript:history.go(-1)">
					<img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png">
				</a>
			</div>
			<a class="right_btn" id="save_address" href="javascript:;" @click="saveaddress">保存</a>
			<div class="title">
				<a href="javascript:;">收货地址</a>
			</div>
		</header>
		<form id="addressForm" method="" onsubmit="return false" action="">
			<div class="addressErrorMessage">{{addressErrorMessage}}</div>
			<p class="item_wrap">
				<label for="addressUser">
                    <input type="text" v-model="addressUser" placeholder="收货人" id="addressUser" name="realName" value="">
                </label>
			</p>
			<p class="item_wrap">
				<label for="validatePhoneOrMobile">
                    <input placeholder="联系电话" v-model="addressPhone" id="validatePhoneOrMobile" type="tel" name="mobile" value="">
                </label>
			</p>
			<p class="item_wrap">
				<label for="addressPid" class="select_box">
                    <span class="notice note_show">所在省份</span>
                    <select id="addressPid" name="province" v-model="catyList">
                        <option v-for="(li,index) in catyList" :value="li.id">{{li.name}}</option>
                    </select>
                    <span class="select_btn">请选择</span>
                </label>
			</p>
			<p class="item_wrap">
				<label for="addressCid" class="select_box">
                    <span class="notice note_show">所在城市</span>
                    <select id="addressCid" name="city" v-model="catyList">
                        <!-- <option :value="{catyList.municipality}"></option> -->
                    </select>
                    <span class="select_btn">请选择</span>
                </label>
			</p>
			<p> </p>
			<p class="item_wrap">
				<label for="addressDid" class="select_box">
                    <span class="notice note_show">所在地区</span>
                    <select id="addressDid" name="area" v-model="catyList">
                        <option value="0"></option>
                    </select>
                    <span class="select_btn">请选择</span>
                </label>
			</p>
			<p> </p>
			<p class="item_wrap">
				<label for="addressStreet">
                    <input id="addressStreet" v-model="addressStreet" type="text" name="address" placeholder="详细地址(必填)" value="">
                </label>
			</p>
			<p class="item_wrap">
				<label for="addressPostcode">
                    <input id="addressPostcode" v-model="addressPostcode" type="tel" name="zip" value="" placeholder="邮政编码(选填)">
                </label>
			</p>
			<div class="item_wrap">
				<div class="set_wrap">
					<span>设为默认地址</span>
					<input type="checkbox" name="isDefault" id="is_default" value="" style="display:none">
					<span class="switch_btn" :class="{'switch_check':isCheck,'switch_uncheck':!isCheck}" @click="isuncheck">               
                        <i class="inner_circle"></i>                
                    </span>
				</div>
			</div>
			<div class="submitBox" style="display:none">
				<input class="addressBtn button" type="submit" value="保存地址">
			</div>
			<div class="remove_addr_btn" v-show="isAddrBtnShow"> 删除此地址 </div>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isCheck: false,
				isAddrBtnShow: false,
				addressErrorMessage: "",
				addressUser: "",
				addressPhone: "",
				// addressPid: "",
				// addressCid: "",
				// addressDid: "",
				addressStreet: "",
				addressPostcode: "",

			}
		},
		methods: {
			isuncheck() {
				this.isCheck = !this.isCheck;
			},
			saveaddress() {
				console.log(6666);
				if(this.addressUser == "") {
					this.addressErrorMessage = "你还没有填写收货人姓名哦。"
					return;
				}
				console.log(this.addressUser.length);
				if(this.addressUser.length > 10) {
					this.addressErrorMessage = "收货人姓名不能大于10个字。"
					return;
				}
				if(this.addressPhone == "") {
					this.addressErrorMessage = "你还没有填写联系电话哦。"
					return;
				}
				if(!/^[1][3-9]\d{9}$/.test(this.addressPhone)) {
					this.addressErrorMessage = "请填写11位有效的手机号码"
					return;
				}
				if(this.addressPid == "") {
					this.addressErrorMessage = "地址 省份校验失败"
					return;
				}
				if(this.addressPid == "") {
					this.addressErrorMessage = "地址 城市不能为空"
					return;
				}
				if(this.addressDid == "") {
					this.addressErrorMessage = "地址 区不能为空"
					return;
				}
				if(this.addressStreet == "") {
					this.addressErrorMessage = "地址详细信息不能为空"
					return;
				}
			}
		},
		computed: {
			catyList() {
                console.log(this.$store.state.addressPid);
				return this.$store.state.addressPid;
			}
		},
		mounted() {
			this.$store.dispatch("setCityList");
		},

	}
</script>
<style scoped>
	input[type=password],
	input[type=submit],
	input[type=text],
	textarea {
		-webkit-appearance: none;
		outline: 0;
	}
	
	.addressErrorMessage {
		color: #ff7a9a;
		margin: 7px 0;
		text-align: center;
		font-size: 14px;
	}
	
	.addr_new .item_wrap {
		background: #fff;
	}
	
	.addr_new .set_wrap,
	.addr_new label {
		display: block;
		border-bottom: 1px solid #ccc;
		line-height: 48px;
		height: 48px;
		vertical-align: middle;
		font-size: 0;
		margin-left: 4.4%;
	}
	
	.addr_new .set_wrap {
		margin-top: 7px;
		border-bottom: none;
	}
	
	.addr_new .set_wrap span,
	.addr_new label span {
		font-size: 15px;
		color: #666;
	}
	
	.addr_new .select_box {
		position: relative;
	}
	
	.addr_new .select_box .notice {
		color: #bbb;
		height: 30px;
		line-height: 30px;
		position: absolute;
		top: 50%;
		margin-top: -15px;
		left: 0;
	}
	
	.addr_new .select_box .note_show {
		display: inline-block;
	}
	
	.addr_new .select_box select {
		position: absolute;
		top: 50%;
		margin-top: -15px;
		left: 0;
		-webkit-appearance: none;
		appearance: none;
	}
	
	.addr_new .select_box .select_btn {
		float: right;
		margin-right: 18px;
		color: #ff7a9a;
		font-size: 14px;
	}
	
	.addr_new .select_box .select_btn:after {
		display: inline-block;
		vertical-align: middle;
		content: "";
		color: green;
		width: 7px;
		height: 16px;
		margin-left: 13px;
		margin-top: -2px;
		background: url(http://d04.res.meilishuo.net/pic/_o/77/bb/dbd7ad7f864ff1e044ba4be189c8_13_26.ch.png) no-repeat center;
		background-size: contain;
	}
	
	.switch_btn {
		display: block;
		position: relative;
		width: 52px;
		height: 26px;
		border-radius: 26px;
		float: right;
		margin-top: 10px;
		margin-right: 5%;
	}
	
	.switch_check {
		background: #86e653;
	}
	
	.switch_btn .inner_circle {
		width: 26px;
		height: 26px;
		background: #fff;
		display: inline-block;
		border-radius: 50%;
	}
	
	.switch_uncheck {
		background: #dedad9;
	}
	
	.switch_uncheck .inner_circle {
		position: absolute;
		left: 1px;
		top: 0;
	}
	
	.switch_check .inner_circle {
		position: absolute;
		right: 1px;
		top: 0;
	}
	
	.addr_new .set_wrap input[type=tel],
	.addr_new .set_wrap input[type=text],
	.addr_new .set_wrap select,
	.addr_new label input[type=tel],
	.addr_new label input[type=text],
	.addr_new label select {
		font-size: 15px;
		color: #000;
		width: 95%;
		outline: 0;
		height: 30px;
		border: 0;
		text-indent: 0;
		padding: 0;
		text-align: left;
		background: transparent;
		vertical-align: middle;
	}
	
	.remove_addr_btn {
		margin-top: .12rem;
		background: #fff;
		font-size: .26rem;
		color: #f66;
		padding: 0 .28rem;
		line-height: .8rem;
	}
	/*=============header===========*/
	
	.page_head {
		height: 50px;
		width: 100%;
		background-color: #fff;
		overflow: hidden;
		text-align: center;
		color: #333;
		line-height: 50px;
		border-bottom: 1px solid rgba(51, 51, 51, .15);
	}
	
	.page_head .back_icon {
		z-index: 5;
		float: left;
		text-align: left;
		vertical-align: middle;
		width: 14.66%;
		padding-left: 4%;
	}
	
	.page_head .back_icon img {
		width: 10px;
		display: inline-block;
		margin-top: 14px;
	}
	
	.page_head .right_btn {
		z-index: 5;
		font-size: 18px;
		float: right;
		padding-right: 4%;
		height: 46px;
	}
	
	.page_head .title {
		z-index: 1;
		text-align: center;
	}
	
	.page_head .title a {
		font-size: 18px;
	}
	
	#save_address {
		color: #ff7a9a;
	}
</style>