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
import "./css/weui.css"

// 组件
import Pindex from './router/pindex.vue';
import Phome from './router/router/phome.vue'
import Psort from "./router/router/psort.vue"
import Plogin from "./router/plogin.vue";
import Preg from "./router/preg.vue";
import Regstep1 from "./router/router/regstep1.vue";
import Regstep2 from "./router/router/regstep2.vue";
import sub from "./router/pmine.vue";
import Pchlist from "./component/pchlist.vue";
import car from "./router/pcar.vue";
import Plist from "./router/plist.vue";
import Plong from "./router/pdate.vue";
import Plisting from "./router/plisting.vue";

//路由
var router = new VueRouter({
    routes: [{
            path: '/index',
            component: Pindex,
            children: [{
                path: 'home',
                component: Phome,
                children: [{
                    path: 'list/:sort',
                    component: Pchlist,
                }]
            }, {
                path: 'category',
                component: Psort
            }]

        },
        {
            path: '/subCategory/:pid',
            component: sub,
        }, {
            path: '/login',
            component: Plogin
        }, {
            path: "/car",
            component: car
        }, {
            path: '/reg',
            component: Preg,
            children: [{
                path: 'step1',
                component: Regstep1
            }, {
                path: 'step2',
                component: Regstep2
            }]
        }, {
            path: '/',
            redirect: 'index/home/list/pop'
        },{
        	path:'/listed/:pcid',
        	component:Plist,
        },{
        	path:'/detail/:iid',
        	component:Plong
        },{
        	path:'/listing/:pcid',
        	component:Plisting
        }
    ]
})

//vuex
var store = new Vuex.Store({
    state: {
        carList: [],
        pid: null,
        carProId: null,
        carProNum: null,
        delList: true,
        carousel: null,
        special: null,
        liactive: null,
        litime: null,
        sort: 'pop',
        list: [],
        news:null,
        res:null,
        now:null,
        iid:null,
        gooding:null,
        choose:null,
        pcid:null,
        chin:null,
        sented:true,
        rus:null,
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
                        num: state.carProNum,
                    }
                })
                .then((res) => {
                    console.log("数据写入成功：" + res);
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
                    console.log("数据删除成功：" + res);
                }).catch((err) => {})
        },
		//分类1
        setNews(state) {
            axios.get('http://localhost:999/fsort', {
                    params: {

                    },
                })
                .then((response) => {
//              	console.log(response)
                      state.news = response.data.value
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getActive(state, data) {
            axios.get('http://localhost:999/active').then((data) => {
                // 轮播图
                state.carousel = data.data.data['43542'].list;
                // 9.9包邮活动
                state.special = data.data.data['13730'].list;
                // 限时活动
                state.liactive = data.data.data['42287'].list;
                // 实现时间
                state.litime = data.data.data['42287'].context.currentTime;
            }).catch((err) => {

            })
        },
        getList(state, data) {
            axios.get('http://localhost:999/home', {
                params: {
                    page: state.page,
                    sort: state.sort
                }
            }).then((data) => {
                state.list = state.list.concat(data.data.data.list);
                // console.log(data.data.data.list)
            }).catch((err) => {

            })
        },
        // 分类2
        setChar(state) {

            axios.get("http://localhost:999/tsort", {
                    params: {
                        pid: state.pid
                    }
                }).then((response) => {
//                  console.log(response)
                    state.res = response.data.value.category_1.list
					state.now = response.data.value.category_2.list
//                  console.log(state.res)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        //详情页
        setDetail(state) {
            axios.get("http://localhost:999/main", {
                    params: {
                        iid: state.iid
                    }
                }).then((response) => {
                    console.log(response)
                    state.gooding = response.data.result
                    state.rus = response.data.result.detailInfo.detailImage
                    console.log(state.gooding)
                    console.log(state.rus)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        //列表页1
        setChoose(state) {
            axios.get("http://localhost:999/choose", {
                    params: {
                        pcid: state.pcid
                    }
                }).then((response) => {
//                  console.log(response)
                    state.choose = response.data.data.list
                    console.log(state.choose)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
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
        getActive(context, data) {
            context.commit('getActive')
        },
        getList(context, data) {
            context.commit('getList')
        },
        setDetail(context, data) {
            context.commit('setDetail')
        },
        setChoose(context, data) {
            context.commit('setChoose')
        },
        setChing(context, data) {
            context.commit('setChing')
        },
    }
})


//构造器
new Vue({
    el: '#pretty-talks',
    template: `<router-view></router-view>`,
    store,
    router,
});