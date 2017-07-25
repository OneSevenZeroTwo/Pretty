<template>
	<div>
		<div class="login_title mgj">
			<span class="third_title">美丽说账号登录</span>
		</div>
		<div id="form">
			<mu-text-field label="昵称/邮箱/手机号" v-model="user" labelFloat/>
			<mu-text-field label="密码" type="password" v-model="password" labelFloat/>
		</div>
		<div id="login">
			<mu-raised-button label="登录" @click="show" class="demo-raised-button" :fullWidth="true" secondary/>
		</div>
		<mu-dialog :open="dialog" title="登录失败">
			请输入正确的账号和密码
			<mu-flat-button label="关闭" slot="actions" primary @click="close" />
		</mu-dialog>
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
</style>

<script>
	export default {
		data() {
			return {
				user: '',
				password: '',
				 dialog: false
			}
		},
		methods: {
			show() {
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
    		close () {
      			this.dialog = false
    		}
		}
	}
</script>