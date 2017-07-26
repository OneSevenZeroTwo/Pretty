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

// 组件
import Pindex from './router/pindex.vue';
import Phome from './router/router/phome.vue'
import Psort from "./router/router/psort.vue"

import Plogin from "./router/plogin.vue";
import Preg from "./router/preg.vue";
import sub from "./router/pmine.vue";

import car from "./router/pcar.vue";

var store = new Vuex.Store({
	state: {
		carList: [],
		pid: null,
	},
	getters: {

	},
	//分发状态
	mutations: {
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

var router = new VueRouter({
	routes: [{
			path: '/index',
			component: Pindex,
			children: [{
				path: 'home',
				component: Phome,
			}, {
				path: '/category',
				component: Psort
			}]
		},
		{
			path: '/subCategory',
			component: sub,
		}, {
			path: '/login',
			component: Plogin
		}, {
			path: "/car",
			component: car
		}, {
			path: '/reg',
			component: Preg
		}, {
			path: '/',
			redirect: 'index/home'
		}
	]

})

new Vue({
	el: '#pretty-talks',
	template: `<router-view></router-view>`,
	store,
	router,

})