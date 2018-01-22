// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 加载UI组件
import ElementUI from 'element-ui'
// 加载主题
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 全局导航过滤 拦截路由 自动执行
// beforeEach每一个路由在发之前做一些
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('mytoken')
  if (user) {
    // 允许通过 按照正常的逻辑向下跳转
    next()
  } else {
    // 登录的路由不需要验证权限
    if (to.path !== '/login') {
      // 没有权限 重新跳转到登录页
      next({path: '/login'})
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
