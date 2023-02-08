import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views'), 
  },
  {
    path: '/bigScreenDesigner', 
    name: 'bigScreenDesigner',
    component: () => import('@/views/bigScreenDesigner'), 
    hidden: false, 
    meta: { 
      requireAuth: true 
    }
  },
];
const router = createRouter({
  // 指定模式
  /**
   * createWebHashHistory 带 # 号
   * createWebHistory 不带 # 号
   */
  history: createWebHistory(),
  // 下面这个 可以写成ES6的简写 routers
  routes:constantRouterMap
})

export default router