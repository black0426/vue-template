import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: () => import('@/views/Topic')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('@/views/User')
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
