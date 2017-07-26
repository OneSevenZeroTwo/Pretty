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

var router = new VueRouter({
	routes: [{
			path: '/index',
			component: Pindex,
			children: [{
				path: 'home',
				component: Phome,
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
		}, {
			path: '/reg',
			component: Preg
		}, {
			path: '/',
			redirect: 'index/home'
		}
	]
})

var store = new Vuex.Store({
	state: {
		carList: [],
		pid: null,
		carProId: null,
		carProNum:null,
		delList:true,
	},
	getters: {

	},
	//分发状态
	mutations: {
		//获取购物车列表数据
		setCarList(state) {
			axios.get("http://localhost:5555/read")
				.then((res) => {
					state.carList = state.carList.concat(res.data);
					console.log(state.carList);
				}).catch((err) => {})
		},
		//修改购物车列表选中项数据
		getCarList(state) {
			axios.get("http://localhost:5555/write", {
					params: {
						id: state.carProId,
						num:state.carProNum,
					}
				})
				.then((res) => {
					console.log("数据写入成功："+res);
				}).catch((err) => {})
		},
		//删除购物车列表选中项数据
		delCarList(state) {
			axios.get("http://localhost:5555/delete", {
					params: {
						id: state.carProId,
					}
				})
				.then((res) => {
					console.log("数据删除成功："+res);
				}).catch((err) => {})
		},
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
		setChar(state) {

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

		}
	},

	actions: {
		//提交触发 mutations 的 setCarList 获取数据函数
		setCarList(context) {
			context.commit("setCarList");
		},
		//提交触发 mutations 的 getCarList 修改数据函数
		getCarList(context) {
			context.commit("getCarList");
		},
		//提交触发 mutations 的 getCarList 修改数据函数
		delCarList(context) {
			context.commit("delCarList");
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
	}, {
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
	}]

})

new Vue({
	el: '#pretty-talks',
	template: `<router-view></router-view>`,
	store,
	router,

})