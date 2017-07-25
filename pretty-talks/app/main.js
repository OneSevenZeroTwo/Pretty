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

import "./css/base.css";
import Plogin from "./router/plogin.vue";

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
        },{
        	path: '/category',
			component: Psort
        }]
    }, 
    {
		path: '/subCategory',
		component: sub,
	},{
		path:'/login',
		component:Plogin
	},
    {
        path: '/',
        redirect: 'index/home'
    }]
})


new Vue({
	el: '#pretty-talks',
	template:`<router-view></router-view>`,
	store,
	router,
})


