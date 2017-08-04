<template>
    <div>
        <ul class="clearfix">
        	<h3 class="fas_title">本周流行</h3>
            <li v-for="(cl,index) of clList" :key="index">
            	<a href="#">
            		<img :src="cl.img">
            		<p class="cl_title">{{cl.title}} </p>
            	</a>
            </li>
        </ul>
    </div>
</template>

<script>
	export default{
        data(){
            return {
                clList:[{
                    img:require('../img/c1.jpg'),
                    title:"职场人气衬衫",
                    fcid:10063894
                },{
                    img:require('../img/c2.jpg'),
                    title:"舒适T恤裙",
                    fcid:10057288

                },{
                    img:require('../img/c3.jpg'),
                    title:"粉嫩惹人爱",
                    fcid:10063891
                },{
                    img:require('../img/c4.jpg'),
                    title:"本周热销榜",
                    fcid:10063885
                },{
                    img:require('../img/c5.jpg'),
                    title:"Chic港风",
                    fcid:10063895
                },{
                    img:require('../img/c6.jpg'),
                    title:"遮肉收腰美裙",
                    fcid:10063890
                },{
                    img:require('../img/c7.jpg'),
                    title:"萌妹蝴蝶结",
                    fcid:10063882
                },{
                    img:require('../img/c8.jpg'),
                    title:"经典黑白配",
                    fcid:10063842
                }]
            }
        }
	}
</script>

<style scoped>
	div{
		background: #fff;
        padding-top: 40px;
	}
    .fas_title{
        font-size: 18px;
        text-align: center;
        font-family: "宋体";
        line-height: 24px;
    }
	li{
        margin: 10px 0 10px 10px;
		float: left;
		
	}
	li img{
		display: block;
		width: 80px;
		height: 80px;
	}
	.cl_title{
		text-align: center;
		font-size: 14px;
	}

</style>