import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ajax = axios;

import car from "./router/pcar.vue";

var store = new Vuex.Store({
	state: {
		
	},
	mutations: {

	},
	actions: {
		
	}
})
var router = new VueRouter({
	routes:[{
		path:"/car",
		component:car
	}]
})

new Vue({
	el: '#stroll',
	template: `
		<router-view></router-view>
	`,
	store,
	router,
})


