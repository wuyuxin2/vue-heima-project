// 入口文件
import Vue from 'vue'

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import app from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function(dataStr,pattern = 'YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern)
})

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需添加组件
import { Header, Button } from 'mint-ui';
Vue.component("mt-header", Header);
// 轮播图swipe
import { Swipe, SwipeItem } from 'mint-ui';
import { func } from 'prop-types';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})