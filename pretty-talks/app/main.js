import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ajax = axios;

import "./css/base.css";

import car from "./router/pcar.vue";

import Plogin from "./router/plogin.vue";

var store = new Vuex.Store({
	state: {
		carList:[],
	},
	mutations: {
		setCarList(state){
			axios.get("http://localhost:8080/carlist.json")
			.then((res) => {
				//console.log(res);
				state.carList = res.data.data;
				console.log(state.carList);
			}).catch((err) => {})
		}
	},
	actions: {
		setCarList(context){
			context.commit("setCarList");
		}
	}
})
var router = new VueRouter({
	routes: [{
		path: "/car",
		component: car
	}, {
		path: '/login',
		component: Plogin
	}]
})

new Vue({
	el: '#pretty-talks',
	template: `<router-view></router-view>`,
	store,
	router,
})