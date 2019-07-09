import Vue from 'vue'
// 创建路由对象及配置路由规则和其他路由配置
import VueRouter from 'vue-router'
// @在vue-cli创建的项目中代表被写死的src目录
import login from '@/views/login'

// 注册 导入vue
Vue.use(VueRouter)

// 初始化router对象(配置路由规则)
const router = new VueRouter({
  // 路由规则
  routes: [
    { path: '/login', name: 'login', component: login }
  ]
})

export default router
