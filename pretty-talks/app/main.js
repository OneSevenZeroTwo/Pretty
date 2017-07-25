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

<<<<<<< HEAD
import "./css/base.css";
=======

// 样式
import './css/base.css'
// 组件
import Pindex from './router/pindex.vue';
import Phome from './router/router/phome.vue'

import Psort from "./router/router/psort.vue"
>>>>>>> b1a39778f7148c3df1726de66cfba77aa4dc8798
import Plogin from "./router/plogin.vue";
import sub from "./router/pmine.vue";

var router = new VueRouter({
    routes: [{
        path: '/index',
        component: Pindex,
        children: [{
            path: 'home',
            component: Phome,
        },{
        	path: 'category',
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

var store = new Vuex.Store({
	state: {
<<<<<<< HEAD

=======
		pid:null,
	},
	getters: {
		
>>>>>>> b1a39778f7148c3df1726de66cfba77aa4dc8798
	},
	//分发状态
	mutations: {
		
<<<<<<< HEAD
=======
		setNews(state) {
			axios.get('http://localhost:999/fsort',{
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

			axios.get("http://localhost:999/tsort" + state.pid, {
					params: {

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
>>>>>>> b1a39778f7148c3df1726de66cfba77aa4dc8798
	},

	actions: {
<<<<<<< HEAD

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
=======
		setNews(context, data) {
			context.commit('setNews')
		},
		setChar(context, data) {
			context.commit('setChar')
		}
	}
})
>>>>>>> b1a39778f7148c3df1726de66cfba77aa4dc8798


new Vue({
	el: '#pretty-talks',
	template:`<router-view></router-view>`,
	store,
	router,
})

