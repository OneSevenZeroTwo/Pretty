<template>
    <section id="wrapper_main" class="wrapper">
        <div class="addr_list">
            <ul class="addrShow">
                <li class="unit" v-for="(ali,index) in addrList" @click="useIt(ali.id)">
                    <div class="inner">
                        <span class="choose_btn" :class="{unchoose:ali.isDefault==0,choose:ali.isDefault==1}"></span>
                        <div class="adrl_list inner_msg">
                            <p>
                                <span class="nick_name">{{ali.addressUser}}</span>
                                <span class="adrl_phone">{{ali.addressPhone}}</span>
                                <span class="default_note" v-show="ali.isDefault">默认</span>
                            </p>
                            <p class="add_detail">{{ali.addressStreet}}</p>
                        </div>
                        <div class="addr_msg" style="display:none"></div>
                        <a href="#/addaddr" @click="modthis(ali.id)">
                            <span class="edit_btn"></span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
	data(){
		return{
			isDefaultShow:false,
		}
	},
 	mounted(){
 		this.$store.state.useAddrId = null;
 		this.$store.dispatch("getAddrList");
 	},
 	computed:{
 		addrList(){
 			//获取所有地址
 			return this.$store.state.addrList;
 		}
 	},
 	methods:{
 		// 点击成为默认地址
 		useIt(useId){
 			//console.log(this.addrList[0]);
 			this.$store.state.useAddrId = useId;
 			this.$store.dispatch("isnomodifyAddr");
 			this.$store.dispatch("ismodifyAddr");
 			//this.$store.dispatch("modifyAddrList");
 			window.location.href = "#/order";
 		},
 		modthis(modthisId){
 			this.$store.state.useAddrId = null;
 			this.$store.state.useAddrId = modthisId;
 		}
 	}
}
</script>
<style scoped>
.addrShow {
    margin-top: 10px;
}

.addrShow .unit:first-child {
    margin-bottom: 10px;
}

.addrShow .unit {
    background: #fff;
}

.addrShow .inner {
    padding: 18px 0;
    margin: 0 18px;
    border-bottom: 1px solid rgba(51, 51, 100, .15);
    font-size: 0;
}

.addrShow .unit:first-child .inner,
.addrShow .unit:last-child .inner {
    border-bottom: none;
}

.addrShow .choose_btn {
    width: 25px;
    height: 25px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
}

.addrShow .choose {
    background: url(http://d02.res.meilishuo.net/pic/_o/52/6d/2c84d71dbaf4e2f4cfc30d48bef9_45_45.cg.png) no-repeat center;
    background-size: contain;
}
.addrShow .unchoose {
    border: 1px solid #979797;
    border-radius: 50%;
}
.addrShow .inner_msg {
    display: inline-block;
    vertical-align: middle;
    margin: 0 12px;
    border-right: 1px solid #e6e6e6;
    width: 75%;
}

.addrShow p {
	line-height: 1;
    font-size: 0;
}

.addrShow .nick_name {
    font-size: 16px;
    color: #000;
}

.addrShow .adrl_phone {
    font-size: 14px;
    color: #000;
    margin-left: 16px;
}

.addrShow .default_note {
    background: #ffab33;
    font-size: 13px;
    margin-left: 7%;
    color: #fff;
    padding: 1px;
    border-radius: 2px;
}

.addrShow .add_detail {
    line-height: 1;
    font-size: 14px;
    color: #999;
    padding-top: 12px;
}

.addrShow .edit_btn {
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url(http://d01.res.meilishuo.net/pic/_o/4a/66/79cf7aceec345f584fde84e2b605_30_31.ch.png) no-repeat center;
    vertical-align: middle;
    background-size: contain;
}
</style>
