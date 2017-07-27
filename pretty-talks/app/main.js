import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios";
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ajax = axios;

// 样式
import "./css/base.css";
import "./css/weui.css"

// 组件
import Pindex from './router/pindex.vue';
import Phome from './router/router/phome.vue'
import Psort from "./router/router/psort.vue"

import Plogin from "./router/plogin.vue";
import Preg from "./router/preg.vue";
import sub from "./router/pmine.vue";
import Pchlist from "./component/pchlist.vue";
 import car from "./router/pcar.vue";

var router = new VueRouter({
    routes: [{
            path: '/index',
            component: Pindex,
            children: [{
                path: 'home',
                component: Phome,
                children: [{
                    path: 'list/:sort',
                    component: Pchlist,
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
            path: "/car",
            component: car
        }, {
            path: '/reg',
            component: Preg
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
        carousel: null,
        special: null,
        liactive: null,
        litime: null,
        sort: 'pop',
        list: [],
        carList: [],
        pid: null,
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

            axios.get("http://localhost:999/tsort", {
                    params: {
                        pid: state.pid
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
        getActive(state, data) {
            axios.get('http://localhost:999/active').then((data) => {
                // 轮播图
                state.carousel = data.data.data['43542'].list;
                // 9.9包邮活动
                state.special = data.data.data['13730'].list;
                // 限时活动
                state.liactive = data.data.data['42287'].list;
                // 实现时间
                state.litime = data.data.data['42287'].context.currentTime;
            }).catch((err) => {

            })
        },
        getList(state, data) {
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
        },
        setCarList(state) {
            axios.get("http://localhost:8080/carlist.json")
                .then((res) => {
                    //console.log(res);
                    state.carList = res.data.data;
                    console.log(state.carList);
                }).catch((err) => {})
        },
        setNews(state) {
            axios.get('http://localhost:999/fsort', {
                    params: {

                    },
                })
                .then((response) => {
                    //					state.news = state.news.concat(response.data.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        setChar(state) {

            axios.get("http://localhost:999/tsort", {
                    params: {
                        pid: state.pid
                    }
                }).then((response) => {
                    console.log(response)
                    //					state.res = response.data.data
                    console.log(state.res)
                })
                .catch((error) => {
                    console.log(error)
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
        getList(context, data) {
            context.commit('getList')
        },
        setCarList(context) {
            context.commit("setCarList");
        },
        setNews(context, data) {
            context.commit('setNews')
        },
        setChar(context, data) {
            context.commit('setChar')
        },
    }
})

new Vue({
    el: '#pretty-talks',
    template: `<router-view></router-view>`,
    store,
    router,
});
// 指令
Vue.directive('shift',{
	bind(el,binding){
		console.log(el.binding)
	}
})