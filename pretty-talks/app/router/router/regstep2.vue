<template>
    <div>
        <div id="avatar-container">
            <div class="img-container">
                <span class="edit-avatar">更换头像</span>
                <img src="../../../images/login&reg&mine/step2.png" class="headpic">
            </div>
        </div>
        <form id="theform">
            <input id="upload" type="file" name="head" accept="image/png, image/jpeg, image/jpg" @change="getImg">
        </form>
        <div class="tips">给自己取个喜欢的昵称，做一朵不一样的烟火</div>
        <div id="thename">
            <mu-text-field label="请输入昵称" v-model="user" :fullWidth="true" labelFloat/>
            <mu-raised-button label="确定" @click="setName('top')" class="demo-raised-button" :fullWidth="true" secondary/>
        </div>
        <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
            请输入正确的格式
        </mu-popup>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: '',
            topPopup: false,
            headerImgUrl:''
        }
    },
    methods: {
        setName(position) {
            if (!/^.{3,15}$/.test(this.user)) {
                this[position + 'Popup'] = true;
                this.user = '';
                return false;
            }
            this.$.ajax({
                url: 'http://localhost:999/newsimg',
                type: 'GET',
                data: {
                    username: this.user,
                    phone: this.$route.params.phone,
                    headerImgUrl: this.headerImgUrl
                },
                success: (data) => {
                    this.$.ajax({
		                url: 'http://localhost:999/search',
		                type: 'GET',
		                data: {
		                    phone: this.$route.params.phone,
		                },
		                success: (data) => {
						    var now = new Date();
						    now.setDate(now.getDate() + 7);
		                    document.cookie = 'id='+ data[0].id +';expires='+ now;
		                    window.location.href = 'http://localhost:4399';
		                }
		            })
                }
            })
        },
        getImg() {
            this.$.ajax({
                url: 'http://localhost:999/sethead',
                type: 'POST',
                cache: false, //不必须
                data: new FormData(this.$('#theform')[0]),
                processData: false,
                contentType: false,

                success: (data)=> {
                	console.log('./headImg/' + data.imgurl)
                    this.headerImgUrl = './headImg/' + data.imgurl;
                    this.$('.headpic').attr('src',this.headerImgUrl)
                }
            })
        }
    },
    watch: {
        topPopup(val) {
            if (val) {
                setTimeout(() => {
                    this.topPopup = false
                }, 1500)
            }
        }
    },
}
</script>
<style>
.img-container {
    height: 125px;
    width: 125px;
    margin: 30px auto;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
}

.img-container img {
    height: 125px;
    width: 125px;
}

.edit-avatar {
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -50px;
    opacity: .2;
    background: #000;
    display: block;
    width: 100px;
    height: 25px;
    font-size: 14px;
    color: #fff;
    text-align: center;
}

#theform {
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -62px;
    width: 125px;
    height: 125px;
    opacity: 0;
}

#upload {
    height: 100%;
    width: 100%;
}

.tips {
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
}

#thename {
    margin: 10px 5% 0 5%;
}

.mu-raised-button {
    font-size: 16px;
    height: 45px;
    background-color: #ff5777;
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
</style>