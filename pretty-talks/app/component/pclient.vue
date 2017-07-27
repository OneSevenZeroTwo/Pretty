<!-- 圆形 -->
<template>
    <div>
        <ul class="clearfix">
            <li v-for="(se,index) of special" :key="index">
                <a href="#">
                    <img :src="se.image">
                    <p class="cl_title">{{se.title}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            page: 1
        }
    },
    computed: {
        special() {
            return this.$store.state.special
        },
        sort(){
            return this.$route.params.sort
        }
    },
    methods: {
        loadmore() {
            window.addEventListener('scroll', () => {
                console.log(document.body.offsetHeight, window.scrollY)
                if (document.body.offsetHeight - window.scrollY <= 1000) {
                    // console.log(this);
                    this.$ajax.get('http://localhost:999/home', {
                        params: {
                            page: this.page++,
                            sort: this.sort
                        }
                    }).then((data) => {
                        this.$store.state.list = this.$store.state.list.concat(data.data.data.list);
                        // console.log(data.data.data.list)
                    }).catch((err) => {

                    })

                }
            })

        }
    },
    mounted() {
        this.loadmore()
        this.$store.dispatch('getActive');
    },

}
</script>
<style scoped>
div {
    background: #fff;
}

li {
    margin: 10px 0 10px 10px;
    float: left;
}

li img {
    display: block;
    width: 80px;
    height: 80px;
}

.cl_title {
    text-align: center;
    font-size: 14px;
}
</style>