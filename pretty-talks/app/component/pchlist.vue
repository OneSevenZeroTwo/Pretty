<template>
    <div>
        <ul class="list_ch clearfix">
            <li v-for="lis in list">
                <a href="#">
					<img :src="lis.show.img">
					<p class="li_title">{{lis.title}}</p>
					<p class="mo_price">{{lis.price}}<span class=" collect"></span><span class="count">{{lis.cfav}}</span></p>
				</a>
            </li>
        </ul>
    </div>
</template>
<script>
// 解决刷新问题
export default {
    // sort:pop sell new
    data() {
        return {
            page: 0,
            isshownav: 0,
            // list: []
        }
    },
    computed: {
        sort() {
            return this.$route.params.sort;
            // console.log(this.$route.params.sort)
        },
        list(){
        	return this.$store.state.list
        }
    },
    methods: {
    	// getList() {
     //        this.$ajax.get('http://localhost:999/home', {
     //            params: {
     //                page: this.page++,
     //                sort: this.$route.params.sort
     //            }
     //        }).then((data) => {
     //            this.list = this.list.concat(data.data.data.list);
     //            console.log(data.data.data.list)
     //        }).catch((err) => {

     //        })
     //    },
        get(){
        	this.list = [];
        	this.getList()
        }
    },
    mounted() {
        // this.getList()
    }
}
</script>
<style scoped>
	div{
		background: #fff;
	}
</style>