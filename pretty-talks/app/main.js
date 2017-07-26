import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ajax = axios;


// 样式
import './css/base.css'
// 组件
import Pindex from './router/pindex.vue';
import Phome from './router/router/phome.vue'

import Psort from "./router/router/psort.vue"
import Plogin from "./router/plogin.vue";
import sub from "./router/pmine.vue";
import Pchlist from "./component/pchlist.vue"

var router = new VueRouter({
    routes: [{
            path: '/index',
            component: Pindex,
            children: [{
                path: 'home',
                component: Phome,
                children:[{
                	path:'list/:sort',
                	component:Pchlist,
                }]
            }, {
                path: 'category',
                component: Psort
            }]
        },
        {
            path: '/subCategory',
            component: sub,
        }, {
            path: '/login',
            component: Plogin
        },
        {
            path: '/',
            redirect: 'index/home/list/pop'
        }
    ]
})

var store = new Vuex.Store({
    state: {
        pid: null,
        carousel:null,
        special:null,
        liactive:null,
        litime:null,
        sort:'pop',
        list:[]
    },
    getters: {

    },
    //分发状态
    mutations: {

        setNews(state) {
            axios.get('http://localhost:999/fsort', {
                    params: {

                    },
                })
                .then((response) => {
                    //state.news = state.news.concat(response.data.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getActive(state) {

            axios.get("http://localhost:999/tsort" ,{
                    params: {
                    	pid:state.pid
                    }
                }).then((response) => {
                    console.log(response)
                    //state.res = response.data.data
                    console.log(state.res)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getActive(state,data){
        	axios.get('http://localhost:999/active').then((data)=>{
        		// 轮播图
        		state.carousel = data.data.data['43542'].list;
        		// 9.9包邮活动
        		state.special = data.data.data['13730'].list;
        		// 限时活动
        		state.liactive = data.data.data['42287'].list;
        		// 实现时间
        		state.litime = data.data.data['42287'].context.currentTime;
        	}).catch((err)=>{

        	})
        },
        getList(state,data) {
            axios.get('http://localhost:999/home', {
                params: {
                    page: state.page,
                    sort: state.sort
                }
            }).then((data) => {
                state.list = state.list.concat(data.data.data.list);
                // console.log(data.data.data.list)
            }).catch((err) => {

            })
        }
    },

    actions: {
        setNews(context, data) {
            context.commit('setNews')
        },
        setChar(context, data) {
            context.commit('setChar')
        },
        getActive(context, data) {
            context.commit('getActive')
        },
        getList(context,data){
        	context.commit('getList')
        }
    }
})

new Vue({
    el: '#pretty-talks',
    template: `<router-view></router-view>`,
    store,
    router,
    mounted(){
    }
})