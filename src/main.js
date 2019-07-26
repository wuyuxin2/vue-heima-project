// 入口文件
import Vue from 'vue'

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 注册 Vuex 
import Vuex from 'vuex';
Vue.use(Vuex)

// 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: { // this.$store.state.***
        car: car //将 购物车中的商品用一个数组存储起来，存储一些商品的对象，可以将商品对象设计成这个样子：
        // { id:商品的id, count:要购买的数量, price:商品的单价, selected:false }
    },
    mutations: { // this.$store.commit('方法的名称','按需传入唯一的参数')
        addToCar(state, goodsinfo) {
            // 点击加入购物车，把商品信息，保存到 store 中的 car 上
            // 分析： 
            // 1. 如果购物车中，之前就已经有这个对应的商品了，那么只要更新数量就行了
            // 2. 如果没有，则直接把 商品数据，push 到 car 中即可
            var flag = false

            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            // 如果循环完毕，得到的flag还是false，则把商品数据直接 push 到购物车中
            if (!flag) {
                state.car.push(goodsinfo)
            }

            // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo){
            //  修改购物车中商品的数量
            // 分析：
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            // 当修改完商品数量，把最新的数量保存到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id){
            // 根据id，从store 中的购物车中删除对应的那条商品数据
            state.car.some((item, i)=>{
                if(item.id == id){
                    state.car.splice(i, 1)
                    return true
                }
            })
            // 将删除完毕后的最新的购物车 储存在本地
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: { // this.$store.getters.***
        // 相当于 计算属性，也相当于 filters
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        }
    }
})

import app from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// （post第三个参数）设置全局 post 时候表单数据格式组织形式 X-HTTP-Method-Override
Vue.http.options.emulateHTTP = true;

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需添加组件
/* import { Header, Button } from 'mint-ui';
Vue.component("mt-header", Header);
// 轮播图swipe
import { Swipe, SwipeItem, Lazyload } from 'mint-ui';
import { func } from 'prop-types';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload); */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// A Vue Integrated PhotoSwipe Image Preview Plugin
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)



var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
    store
})