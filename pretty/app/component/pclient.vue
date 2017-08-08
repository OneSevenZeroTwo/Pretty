<!-- 圆形 -->
<template>
    <div >
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
        sort() {
            return this.$route.params.sort
        }
    },
    methods: {
    },
    mounted() {
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
ul{
    display: flex;
}
li {
    margin: 2% 0 2% 2%;
   flex: 1;
}
li:last-child{
    margin-right: 2%;
}
li a{
    width: 100%;
}
li img {
    display: block;
     width: 100%;
}

.cl_title {
    text-align: center;
    font-size: 14px;
}
</style>