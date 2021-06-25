import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/calendar'
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/calendar')
    },
    {
      path: '/lottery',
      name: 'lottery',
      component: () => import('../views/lottery')
    },
    {
      path: '/fuzzySearch',
      name: 'fuzzySearch',
      component: () => import('../views/fuzzySearch')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search')
    }
  ]
})
export default router
