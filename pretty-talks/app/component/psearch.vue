<template>
    <!-- 有数据可以请求 -->
    <div class="psearch " v-show="isshowsearch">
        <!-- 热门根据a标签直接跳转 -->
        <div class="fisea">
            <div class="history" style="display: none;">
                <h3><span></span>历史搜索</h3>
                <ul class="clearfix">
                    <li><a href="javascript:;">连衣裙</a></li>
                    <li class="def"><a href="javascript:;">小白鞋</a></li>
                    <li><a href="javascript:;">省心套装</a></li>
                    <li class="def"><a href="javascript:;">碎花连衣裙</a></li>
                    <li><a href="javascript:;">明星同款</a></li>
                    <li class="def"><a href="javascript:;">高跟鞋</a></li>
                    <li><a href="javascript:;">美妆</a></li>
                    <li class="def"><a href="javascript:;">墨镜</a></li>
                </ul>
            </div>
            <div class="hot" v-show="isshowtsea">
                <h3><span></span>热门搜索</h3>
                <ul class="clearfix">
                    <li><a href="#">连衣裙</a></li>
                    <li class="def"><a href="#">小白鞋</a></li>
                    <li><a href="#">省心套装</a></li>
                    <li class="def"><a href="#">碎花连衣裙</a></li>
                    <li><a href="#">明星同款</a></li>
                    <li class="def"><a href="#">高跟鞋</a></li>
                    <li><a href="#">美妆</a></li>
                    <li class="def"><a href="#">墨镜</a></li>
                </ul>
            </div>
            <!-- 死跳转，点击的时候会出现在搜索框中，实现搜索，双向数据绑定 当有数据的时候才出现，做判断 -->
        </div>
        <div class="psealist" v-show="!isshowtsea">
            <ul>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
                <li><a href="javascript:;">裙子</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
	export default{
		computed:{
			isshowsearch(){
				return this.$store.state.isshowsearch
			},
			isshowtsea(){
				return this.$store.state.isshowtsea
			}
		}
	}
</script>
<style scoped>
.psearch {
	padding-top: 20px;
	background: #fff;
    width: 100%;
    position: absolute;
    z-index: 100;
    top: 5.8%;
    /*background: #eee;*/
    height: 88%;
    padding-left: 15px;
}

.fisea {

    /*display: none;*/
}

.fisea h3 {
    font-size: 16px;
    color: #666;
    height: 30px;
    line-height: 30px;
    /*text-indent: 1em;*/
    font-weight: 100;
}

.fisea span {
    margin-right: 12px;
    display: inline-block;
    width: 11px;
    height: 15px;
    background: url('../img/fire.png')
}

.fisea li {
    background: #F4F4F4;
    float: left;
    border-radius: 20px;
    margin: 12px 0 0 10px;
}

.fisea li a {
    text-decoration: none;
    display: block;
    line-height: 14px;
    font-size: 12px;
    padding: 2px 11px;
    color: #f36;
}

.fisea .def a {
    color: #666;
}

.fisea .history {
    margin-bottom: 20px;
}

.psealist {
    /*display: none;*/
}

.psealist li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e6e5e6
}

.psealist li a {
    color: #333;
}
</style>