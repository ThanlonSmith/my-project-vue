import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home/Home";
import Course from "../components/Course/Course";

Vue.use(VueRouter) // use相当于挂在父类
const router = new VueRouter({
  // 配置路由信息
  routes: [ // 这里不要写错了
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
  ]
})
export default router
