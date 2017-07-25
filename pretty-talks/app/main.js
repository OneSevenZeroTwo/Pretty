import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ajax = axios;

import home from "./router/router/psort.vue"
import Plogin from "./router/plogin.vue";
import sub from "./router/pmine.vue";
import Psort from "./router/router/phome.vue";
import Pindex from "./router/pindex.vue";

var router = new VueRouter({

	routes: [{
		path:'index',
		component:Pindex,
		children:[{
			path:'home',
			component:Psort
		},{
		path: '/category',
		component: home,
	 }]
    },
	{
		path: '/subCategory',
		component: sub,
	},{
		path:'/login',
		component:Plogin
	}]
})

var store = new Vuex.Store({
	state: {
		pid:null,
	},
	getters: {
		
	},
	//分发状态
	mutations: {
		
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

			axios.get("http://localhost:999/tsort", {
					params: {
						pid:state.pid
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
		}
	}
})

new Vue({
	el: '#pretty-talks',
	template:`<router-view></router-view>`,
	store,
	router,
})


