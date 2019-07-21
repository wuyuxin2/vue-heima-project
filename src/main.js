// 入口文件
import Vue from 'vue'

import app from './App.vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'

// 按需添加组件
import { Header } from 'mint-ui';
Vue.component("mt-header", Header);

var vm = new Vue({
    el: "#app",
    render: c => c(app)
})