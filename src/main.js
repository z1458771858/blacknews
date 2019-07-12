// main.js职责
// 1 依赖项目需要的资源(js模块 css资源)
// 2 实例化根实例 render()渲染APP组件 然后挂载到#app的容器内

import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 在vue-cli创建的项目中 @的前缀代表的是根路径src目录
import router from '@/router'

import axios from 'axios'
Vue.prototype.axios = axios

// 在全局范围注册组件（注册element-ui组件库）
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
