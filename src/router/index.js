import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about-view.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
