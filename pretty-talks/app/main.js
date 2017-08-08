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
import "./css/weui.css";

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
import Plist from "./router/plists.vue";
import Plong from "./router/pdate.vue";
import Plisting from "./router/plisting.vue";
import order from "./router/porder.vue";
import address from "./router/paddress.vue";
import addaddr from "./router/paddaddr.vue";
import Pmycenter from "./router/pmycenter.vue";
import mycollect from "./router/pmycollect.vue";
import Pfilist from './router/router/pfilist.vue'
import Pseek from './component/pseek.vue'



//路由
var router = new VueRouter({
    routes: [{
        path: '/index',
        component: Pindex,
        children: [{
            path: 'home',
            component: Phome,
            children: [{
                path: 'list/:sort/:page',
                component: Pchlist,
            }]
        }, {
            path: 'category',
            component: Psort

        }, {
            path: 'filist',
            component: Pfilist,
            children: [{
                path: 'pseek/:sort/:page/:title',
                component: Pchlist
            }]
        }]
    }, {
        path: '/subCategory/:pid',
        component: sub,
    }, {
        path: '/login',
        component: Plogin
    }, {
        path: "/car",
        component: car
    }, {
        path: "/order",
        component: order
    }, {
        path: "/address",
        component: address
    }, {
        path: "/addaddr",
        component: addaddr
    }, {
        path: '/reg',
        component: Preg,
        children: [{
            path: 'step1',
            component: Regstep1,
        }, {
<<<<<<< HEAD
            path: "/mycenter",
            component: Pmycenter,
        }, {
        	path:'/mycollect',
            component:mycollect
        },{
            path: '/listed',
            component: Plist,
            children:[{
            	path:'doing/:sort/:page/:pcid',
            	component:Pseek
            }]
        }, {
            path: '/detail/:iid',
            component: Plong
       }, {
          path: '/listing/:pcid',
          component: Plisting,
       }
//     , {
//          path: '/',
//          redirect: 'index/home/list/pop/1'
//      }
    ]
=======
            path: 'step2/:phone',
            component: Regstep2,
        }]
    }, {
        path: "/mycenter",
        component: Pmycenter,
    }, {
        path: '/mycollect',
        component: mycollect
    }, {
        path: '/listed/:pcid',
        component: Plist,
    }, {
        path: '/detail/:iid',
        component: Plong
    }, {
        path: '/listing/:pcid',
        component: Plisting,
    }, {
        path: '/',
        redirect: 'index/home/list/pop/1'
    }]
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
})

//vuex
var store = new Vuex.Store({
    state: {
<<<<<<< HEAD
    	baseUrl: "./data/",
=======
        baseUrl: "http://localhost:999/",
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
        carList: [],
        pid: null,
        carProId: null,
        carProNum: null,
        carousel: null,
        special: null,
        liactive: null,
        litime: null,
        sort: 'pop',
        list: [],
        news: null,
        res: null,
        now: null,
        iid: null,
        gooding: null,
        choose: null,
        pcid: null,
        chin: null,
        sented: true,
        rus: null,
        isChecked: [],
        addressPid: null,
        addressCid: null,
        addressDid: null,
        userAddr: null,
        addrListId: null,
        addrList: null,
        useAddrId: null,
        isAddrDefault: "0",
        isshowmore: true,
        isshowsearch: false,
        isshowtsea: true,
        searchlist: [],
        user_id: null,
    },

    getters: {

    },

    //分发状态
    mutations: {
        //获取购物车列表数据
        getCarList(state) {
            axios.get(state.baseUrl + "read", {
                    params: {
                        user_id: state.user_id,
                    }
                })
                .then((res) => {
                    state.carList = res.data.data;
                    state.isChecked = state.carList.map(function(item) {
                        return item.id;
                    });
                    //console.log("默认选中项",state.isChecked);
                }).catch((err) => {})
        },
        //修改购物车列表选中项数据
        setCarListNum(state) {
            axios.get(state.baseUrl + "writeNum", {
                    params: {
                        id: state.carProId,
                        num: state.carProNum,
                    }
                })
                .then((res) => {
                    //console.log("数量写入成功");
                }).catch((err) => {})
        },
        //修改购物车列表选中项加入订单
        setCarListOrder(state) {
            axios.get(state.baseUrl + "writeOrder", {
                    params: {
                        id: state.carProId,
                    }
                })
                .then((res) => {
                    //console.log("加入订单");
                }).catch((err) => {})
        },
        //删除购物车列表选中项数据
        delCarList(state) {
            axios.get(state.baseUrl + "delete", {
                    params: {
                        id: state.carProId,
                    }
                })
                .then((res) => {
                    //console.log("数据删除成功");
                }).catch((err) => {})
        },
        //设置收货地址
        setAddrList(state) {
            axios.get(state.baseUrl + "setAddr", {
                    params: {
                        address: state.userAddr,
                    }
                })
                .then((res) => {
                    //console.log("设置收货地址成功");
                }).catch((err) => {})
        },
        //获取收货地址列表
        getAddrList(state) {
            axios.get(state.baseUrl + "getAddr", {
                    params: {
                        user_id: state.user_id,
                    }
                })
                .then((res) => {
                    let isDefaults = null;
                    state.addrList = res.data.data;
                    res.data.data.forEach((item, idx) => {
                        if (item.isDefault == 1) {
                            state.isDefaultAddr = item;
                            isDefaults = res.data.splice(idx, 1);
                        }
                    });
                    res.data.data.splice(0, 0, isDefaults[0]);
                    state.addrList = res.data.data;
                }).catch((err) => {})
        },
        //修改收货地址
        modifyAddrList(state) {
            axios.get(state.baseUrl + "modifyAddr", {
                    params: {
                        id: state.useAddrId,
                        address: state.userAddr,
                    }
                })
                .then((res) => {
                    //console.log("修改收货地址成功");
                }).catch((err) => {})
        },
        //修改收货地址默认值1
        ismodifyAddr(state) {
            axios.get(state.baseUrl + "ismodifyAddr", {
                    params: {
                        id: state.useAddrId
                    }
                })
                .then((res) => {
                    //console.log("选中项默认值为1");
                }).catch((err) => {})
        },
        //删除收货地址
        delAddrList(state) {
            axios.get(state.baseUrl + "delAddr", {
                    params: {
                        id: state.addrListId,
                    }
                })
                .then((res) => {
                    //console.log("删除收货地址");
                }).catch((err) => {})
        },
        //分类
<<<<<<< HEAD
		setNews(state) {
			axios.get('data/sort.json', {
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
=======
        //分类
        setNews(state) {
            axios.get('http://localhost:999/fsort', {
                    params: {

                    },
                })
                .then((response) => {
                    console.log(response)
                    state.news = response.data.value
                    console.log(state.news)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
        getActive(state, data) {
            axios.get(state.baseUrl + 'active.json').then((data) => {
                // console.log(data.data)
                // 9.9包邮活动
                state.special = data.data.flist.slice(0, 4);
                // 限时活动
                state.liactive = data.data.olist;
                // 实现时间
                // state.litime = data.data.data['42287'].context.currentTime;
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
<<<<<<< HEAD
        //评论
        setCuss(state) {
            axios.get("data/discuss.json", {
                    params: {
                        iid: state.iid
                    }
                }).then((response) => {
//                  console.log(response)
                    state.cuss = response.data.RECORDS
//                  console.log(state.cuss)
                })
        },      
=======
        setNews(state) {
            axios.get('http://localhost:999/fsort', {
                    params: {

                    },
                })
                .then((response) => {
                    state.news = response.data.value

                    state.news = response.data.value
                })
                .catch((error) => {
                    //console.log(error);
                });
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
        setDetail(state) {
            axios.get("http://localhost:999/main", {
                    params: {
                        iid: state.iid
                    }
                }).then((response) => {
                    // console.log(response)
                    state.gooding = response.data.result
                    state.rus = response.data.result.detailInfo.detailImage
                        // console.log(state.gooding)
                        // console.log(state.rus)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        //评论
        setCuss(state) {
            axios.get("http://localhost:999/discuss", {
                params: {
                    iid: state.iid
                }
            }).then((response) => {
                console.log(response)
                state.cuss = response.data
                console.log(state.cuss)
            })
        },
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
        //收藏
        setColl(state) {
            axios.get("http://localhost:999/collect", {
                params: {
                    iid: state.iid
                }
            }).then((response) => {
                state.cuss = response.data
            })
        },


        // 分类2
        setChar(state) {

            axios.get("data/sort.json", {
                    params: {
                        pid: state.pid
                    }
                }).then((response) => {
<<<<<<< HEAD
//                                      console.log(response)
                    state.res = response.data.value[0].list
                    state.now = response.data.value[0].flist
//                                      console.log(state.res)
//					console.log(state.now)
=======
                    //                  console.log(response)
                    state.res = response.data.value.category_1.list
                    state.now = response.data.value.category_2.list
                        //                  console.log(state.res)
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10

                })
                .catch((error) => {
                    console.log(error)
                })
        },
        //列表页1
        setChoose(state) {
            axios.get("data/goodlist.json", {
                    params: {
                        pcid: state.pcid
                    }
                }).then((response) => {
<<<<<<< HEAD
//                  console.log(response)
                    state.choose = response.data.RECORDS
//                  console.log(state.choose)
=======
                    console.log(response)
                    state.choose = response.data
                        //                  console.log(state.choose)
>>>>>>> 7d69f5b5f27a5af9a16bb5a01f0a5312fc07cc10
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    }
})

new Vue({
    el: '#pretty-talks',
    template: `<router-view></router-view>`,
    store,
    router,
})
