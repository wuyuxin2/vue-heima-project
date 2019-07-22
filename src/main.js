// 入口文件
import Vue from 'vue'

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import app from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需添加组件
import { Header } from 'mint-ui';
Vue.component("mt-header", Header);
// 轮播图swipe
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})