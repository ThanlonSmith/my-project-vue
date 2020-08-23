import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' // 可以不用加js后缀，路由相关的信息在index.js中写

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
