<template>
	<div>
		<div class="login_title mgj">
			<span class="third_title">{{theInput.title}}</span>
		</div>
		<div id="form">
			<mu-text-field :label="theInput.user" v-model="user" labelFloat/>
			<mu-text-field label="密码" type="password" v-model="password" labelFloat/>
		</div>
		<div id="login">
			<mu-raised-button v-show="bool" :label="theInput.type" @click="login" class="demo-raised-button" :fullWidth="true" secondary/>
			<mu-raised-button v-show="!bool" :label="theInput.type" @click="reg('top')" class="demo-raised-button" :fullWidth="true" secondary/>
		</div>
		<mu-dialog :open="dialog" :title="theInput.dialogTitle">
			{{theInput.dialogMsg}}
			<mu-flat-button label="关闭" slot="actions" primary @click="closeDialog" />
		</mu-dialog>
		<mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
			请输入正确的格式
		</mu-popup>
	</div>
</template>

<style>
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
		opacity: .8;
		height: 48px;
		line-height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 375px;
		background-color: #ccc;
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
			}
		},
		methods: {
			login() {
				this.$ajax.get('http://localhost:4399/login', {
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
				if(!/^1[3-57-9]\d{9}$/.test(this.user)) {
					this[position + 'Popup'] = true;
					this.user = '';
					return false;
				}else if(!/^\S{1,19}$/.test(this.password)) {
					this[position + 'Popup'] = true;
					this.password = '';
					return false;
				}
				this.$ajax.get('http://localhost:4399/reg', {
						params: {
							'phone': this.user,
							'password': this.password
						}
					}, )
					.then(res => {
						if(res.data == '0') {
							window.location.href = 'http://localhost:8080';
						} else if(res.data == '1') {
							this.dialog = true;
						}
					})
					.catch(err => {

					})
			},
			closeDialog() {
				this.dialog = false
			},
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
			switch(this.$route.path) {
				case '/login':
					this.bool = true;
					this.$ajax.get('http://localhost:999/active')
					.then(res => {
						console.log(res.data.data)
						console.log(res.data.data['44287'])
					})
					.catch(err => {

					});
					break;
				case '/reg':
					this.bool = false;
					break;
			}
		}
	}
</script>