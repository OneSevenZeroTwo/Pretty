import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ajax = axios;

var store = new Vuex.Store({
	state: {
		
	},
	mutations: {

	},
	actions: {
		
	}
})
var router = new VueRouter({
	
})

new Vue({
	el: '#demo',
	store,
	router,
})


