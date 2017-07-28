<template>
	<div>
		<div class="login_title mgj">
			<span class="third_title">{{theInput.title}}</span>
		</div>
		<div id="form">
			<mu-text-field :label="theInput.user" v-model="user" labelFloat/>
			<mu-text-field label="密码" type="password" v-model="password" labelFloat/>
		</div>
		<div id="captcha">
			<div class="img-code" id="imgCode" style="display: block;">
				<p> 请点击下方图片，将它们翻转到正确方向
					<a href="javascript:;" @click="changeCap" class="changeImg">换一组</a>
				</p>
				<ul>
					<ul>
						<li class="theLi" @click="changeDeg($event)" v-for="n in theArr" :class="n.class">
							<img :src="n.url" />
						</li>
					</ul>
				</ul>
			</div>
		</div>
		<div id="login">
			<mu-raised-button v-show="bool" :label="theInput.type" @click="login('top')" class="demo-raised-button" :fullWidth="true" secondary/>
			<mu-raised-button v-show="!bool" :label="theInput.type" @click="reg('top')" class="demo-raised-button" :fullWidth="true" secondary/>
		</div>
		<mu-dialog :open="dialog" :title="theInput.dialogTitle">
			{{theInput.dialogMsg}}
			<mu-flat-button label="关闭" slot="actions" primary @click="closeDialog" />
		</mu-dialog>
		<mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
			验证失败
		</mu-popup>
		<mu-toast v-if="toast" message="请输入正确的格式" @close="hideToast" />
	</div>
</template>

<style>
	.dego {
		transform: rotateX(0deg);
		-ms-transform: rotateX(0deg);
		-moz-transform: rotateX(0deg);
		-webkit-transform: rotateX(0deg);
		-o-transform: rotateX(0deg);
	}
	
	.degl {
		transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-webkit-transform: rotate(90deg);
		-o-transform: rotate(90deg);
	}
	
	.degw {
		transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
		-o-transform: rotate(180deg);
	}
	
	.dege {
		transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		-moz-transform: rotate(270deg);
		-webkit-transform: rotate(270deg);
		-o-transform: rotate(270deg);
	}
	
	#captcha {
		margin: 0 15px 0 15px;
	}
	
	#captcha p {
		margin: 15px 0 15px 0;
	}
	
	#captcha a {
		float: right;
	}
	
	#captcha li {
		display: inline-block;
		width: 80px;
		height: 80px;
		margin-right: 1.7%;
	}
	
	#captcha li img {
		width: 100%;
		height: 100%;
	}
	
	.login_title {
		padding: 30px 15px 0 15px;
	}
	
	.login_title span {
		display: inline-block;
		width: 100%;
		text-align: center;
		color: #666;
		font-size: 14px;
		position: relative;
	}
	
	.login_title span::before,
	.login_title span::after {
		content: '';
		width: 120px;
		border-bottom: 1px solid #d8d8d9;
		position: absolute;
		top: 10px;
	}
	
	.login_title span::before {
		left: 0;
	}
	
	.login_title span::after {
		right: 0;
	}
	
	#form {
		margin: 30px 15px 0 15px;
	}
	
	.mu-text-field-content {
		height: 50px;
		background-color: #f2f2f2;
		border-radius: 5px;
	}
	
	.mu-text-field-input {
		height: 15px;
	}
	
	.mu-text-field.has-label .mu-text-field-label {
		top: -15px;
		left: 15px;
	}
	
	.mu-text-field.has-label {
		width: 100%;
	}
	
	.mu-raised-button {
		margin-top: 15px;
		height: 45px;
		width: 90%;
		font-size: 16px;
		background-color: #ff5777;
		left: 15px;
	}
	
	.demo-popup-top {
		width: 100%;
		opacity: .9;
		height: 48px;
		line-height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 375px;
		color: #fff;
		background-color: #ff5777;
	}
	
	.changeImg {
		color: #ff5777;
	}
	
	.mu-toast{
		width: 45%;
		position: absolute;
		top: 25%;
		left: 25%;
		background-color: #ff5777;
		color: #fff;
		opacity: 0.9;
	}
</style>

<script>
	export default {
		props: ['theInput'],
		data() {
			return {
				user: '',
				password: '',
				dialog: false,
				bool: 'true',
				topPopup: false,
				theArr: null,
				theI: 0,
				toast: false,
				first: [{
						class: 'dego',
						url: require('../../images/login&reg&mine/captcha-img/1.jpg')
					},
					{
						class: 'dege fail',
						url: require('../../images/login&reg&mine/captcha-img/2.jpg')
					},
					{
						class: 'degl fail',
						url: require('../../images/login&reg&mine/captcha-img/3.jpg')
					},
					{
						class: 'degw fail',
						url: require('../../images/login&reg&mine/captcha-img/4.jpg')
					}
				],
				second: [{
						class: 'dege fail',
						url: require('../../images/login&reg&mine/captcha-img/5.jpg')
					},
					{
						class: 'degl fail',
						url: require('../../images/login&reg&mine/captcha-img/6.jpg')
					},
					{
						class: 'dego',
						url: require('../../images/login&reg&mine/captcha-img/7.jpg')
					},
					{
						class: 'degw fail',
						url: require('../../images/login&reg&mine/captcha-img/8.jpg')
					}
				],
				third: [{
						class: 'degl fail',
						url: require('../../images/login&reg&mine/captcha-img/9.jpg')
					},
					{
						class: 'degw fail',
						url: require('../../images/login&reg&mine/captcha-img/10.jpg')
					},
					{
						class: 'degl fail',
						url: require('../../images/login&reg&mine/captcha-img/11.jpg')
					},
					{
						class: 'dego',
						url: require('../../images/login&reg&mine/captcha-img/12.jpg')
					}
				],
				fourth: [{
						class: 'dege fail',
						url: require('../../images/login&reg&mine/captcha-img/13.jpg')
					},
					{
						class: 'degl fail',
						url: require('../../images/login&reg&mine/captcha-img/14.jpg')
					},
					{
						class: 'degw fail',
						url: require('../../images/login&reg&mine/captcha-img/15.jpg')
					},
					{
						class: 'dege fail',
						url: require('../../images/login&reg&mine/captcha-img/16.jpg')
					}
				],
				fifth: [{
						class: 'dege fail',
						url: require('../../images/login&reg&mine/captcha-img/17.jpg')
					},
					{
						class: 'dego',
						url: require('../../images/login&reg&mine/captcha-img/18.jpg')
					},
					{
						class: 'degw fail',
						url: require('../../images/login&reg&mine/captcha-img/19.jpg')
					},
					{
						class: 'degl fail',
						url: require('../../images/login&reg&mine/captcha-img/20.jpg')
					}
				]
			}
		},
		methods: {
			login(position) {
				this.thePass(position);
				this.$ajax.get('http://localhost:999/login', {
						params: {
							'user': this.user,
							'password': this.password
						}
					}, )
					.then(res => {
						if(res.data == '0') {
							this.dialog = true
						} else if(res.data == '1') {

						}
					})
					.catch(err => {

					})
			},
			reg(position) {
				this.thePass(position);
				if(!/^1[3-57-9]\d{9}$/.test(this.user)) {
					this.showToast();
					this.user = '';
					return false;
				}
				if(!/^\S{1,19}$/.test(this.password)) {
					this.showToast();
					this.password = '';
					return false;
				}

				this.$ajax.get('http://localhost:999/reg', {
						params: {
							'phone': this.user,
							'password': this.password
						}
					})
					.then(res => {
						if(res.data == '0') {
							window.location.href = 'http://localhost:4399/#/reg/step2/?phone=' + this.user;
						} else if(res.data == '1') {
							this.dialog = true;
						}
					})
					.catch(err => {})
			},
			closeDialog() {
				this.dialog = false
			},
			changeDeg(event) {
				clearInterval(this.timer);
				var ele = event.currentTarget;
				ele.classList.remove('fail');
				var arr = window.getComputedStyle(ele).transform.slice(7, -1).split(',');
				var angle = getmatrix(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
				var fkAngle = (Number(angle) - 90);

				var timer = setInterval(function() {
					fkAngle++;
					if(fkAngle >= angle) {
						fkAngle = angle;
						clearInterval(timer);
					}
					ele.style.transform = "rotate(" + (fkAngle + 90) + "deg)";
				});
				if(angle != '270') {
					ele.classList.add('fail');
				}

				function getmatrix(a, b, c, d, e, f) {
					var aa = Math.round(180 * Math.asin(a) / Math.PI);
					var bb = Math.round(180 * Math.acos(b) / Math.PI);
					var cc = Math.round(180 * Math.asin(c) / Math.PI);
					var dd = Math.round(180 * Math.acos(d) / Math.PI);
					var deg = 0;
					if(aa == bb || -aa == bb) {
						deg = dd;
					} else if(-aa + bb == 180) {
						deg = 180 + cc;
					} else if(aa + bb == 180) {
						deg = 360 - cc || 360 - dd;
					}
					return deg >= 360 ? 0 : deg;
				}
			},
			changeCap() {
				this.theI++;
				if(this.theI > 4) {
					this.theI = 0;
				}
				if(this.theI == 0) {
					this.theArr = this.first;
				} else if(this.theI == 1) {
					this.theArr = this.second;
				} else if(this.theI == 2) {
					this.theArr = this.third;
				} else if(this.theI == 3) {
					this.theArr = this.fourth;
				} else if(this.theI == 4) {
					this.theArr = this.fifth;
				}
			},
			thePass(position) {
				if(document.querySelector('.theLi').classList.value.indexOf('fail') != '-1') {
					this[position + 'Popup'] = true;
					return false;
				}
			},
			showToast() {
				this.toast = true
				if(this.toastTimer) clearTimeout(this.toastTimer)
				this.toastTimer = setTimeout(() => {
					this.toast = false
				}, 2000)
			},
			hideToast() {
				this.toast = false
				if(this.toastTimer) clearTimeout(this.toastTimer)
			}
		},
		watch: {
			topPopup(val) {
				if(val) {
					setTimeout(() => {
						this.topPopup = false
					}, 1500)
				}
			}
		},
		mounted() {
			this.changeCap();
			switch(this.$route.path) {
				case '/login':
					this.bool = true;
					break;
				case '/reg/step1':
					this.bool = false;
					break;
			}
		},

	}
</script>