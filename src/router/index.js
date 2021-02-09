import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import Player from '../views/Player.vue';
import More from '../views/More.vue';

Vue.use(VueRouter)

const routes = [
  //搜索
  {
    path: '/',
    component: Search
  },
  {
    path: '/player/:id',
    component: Player
  },
  {
    path: '/more',
    component: More
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
