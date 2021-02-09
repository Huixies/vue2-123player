import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  //搜索
  {
    path: '/',
    component: Search
  },
  {
    path: '/player/:id',
    component: () => import('../views/Player.vue'),
  },
  {
    path: '/more',
    component: () => import('../views/More.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
