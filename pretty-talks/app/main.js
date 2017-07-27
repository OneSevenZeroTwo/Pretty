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
import './css/base.css'
// 组件
import Pindex from './router/pindex.vue';
import Phome from './router/router/phome.vue'
import Psort from "./router/router/psort.vue"
import Plogin from "./router/plogin.vue";
import sub from "./router/pmine.vue";
import Plist from "./router/plist.vue";
import Pdown from "./router/pdate.vue";


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
		path: '/subCategory/:pid',
		component: sub,
	},{
		path:'/login',
		component:Plogin
	},
    {
        path: '/',
        redirect: 'index/home'
    },{
    	path:'/listed',
    	component:Plist,
    	children:[{
    		path:'/detail',
    		component:Pdown
    	}]
    }]
})

var store = new Vuex.Store({
	state: {
		pid:null,
		news:null,
		res:null,
		now:null,
	},
	getters: {
	},
	//分发状态
	mutations: {
		setNews(state) {
			console.log(111)
			axios.get('http://localhost:999/fsort',{
				 params: {
				 	
				},
			})
				.then((response) => {
//					console.log(response)
					state.news = response.data.value
//					console.log(state.news)
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
//					console.log(response)
					state.res = response.data.value.category_1.list
					state.now = response.data.value.category_2.list
					console.log(state.now)
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

