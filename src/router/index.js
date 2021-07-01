import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/calendar')
    },
    {
      path: '/lottery',
      name: 'lottery',
      component: () => import('@/views/lottery')
    },
    {
      path: '/fuzzySearch',
      name: 'fuzzySearch',
      component: () => import('@/views/fuzzySearch')
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('@/views/sort')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search')
    }
  ]
})
export default router
