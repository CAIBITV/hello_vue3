// 创建一个路由器，并暴露出去
// 1. 引入createRouter函数
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 引入可能的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

// 2. 创建路由器
const router = createRouter({
  history: createWebHashHistory(), // 路由器的工作模式
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/about',
      component: About
    }
  ]
})

// 暴露router
export default router