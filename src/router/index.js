import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/csslearn',
    name: 'CSS学习',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/css/LearnCSSBasic.vue')
  },
  {
    path: '/cssadvanced',
    name: 'CSS3高级学习',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/css/css3/LearnCSS3.vue')
  },
  {
    path: '/learnlib',
    name: '使用第三方库',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/uselib/UseLib.vue'),
    children: [
      {
        path: 'usemavon',
        name: '使用mavon',
        component: () => import('../pages/uselib/usemavon/UserMavon.vue')
      },
      {
        path: 'usedraggable',
        name: '使用vuedraggable',
        component: () => import('../pages/uselib/usedragable/UseDraggable.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
