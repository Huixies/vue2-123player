import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Search
  },
  {
    path: '/player',
    component: () => import('../views/Player.vue')
  },
  {
    path: '/more',
    component: () => import('../views/More.vue')
  },
  {
    path: '/talk',
    component: () => import('../views/Talk.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
