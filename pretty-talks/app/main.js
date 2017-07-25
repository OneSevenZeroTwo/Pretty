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

var store = new Vuex.Store({
    state: {
    },
    mutations: {

    },
    actions: {

    }
})
var router = new VueRouter({
    routes: [{
        path: '/index',
        component: Pindex,
        children: [{
            path: 'home',
            component: Phome,
        }]
    }, {
        path: '/',
        redirect: 'index/home'
    }]
})

new Vue({
    el: '#perry-talks',
    template: `<router-view></router-view>`,
    store,
    router,
})