import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const router = new Router({
  mode: 'hash', // history or hash
  base: process.env.BASE_URL,
  routes
})

// 페이지 이동 직전에 호출
router.beforeEach((to, from, next) => {
  next()
})

// 페이지 이동 이후에 호출
router.afterEach(() => {

})

export default router
