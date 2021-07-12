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
      //我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。
      //例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。
      //那么，我们可以在 vue- router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：
      //一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用
      path: '/topic/:id',
      name: 'topic',
      component: () => import('@/views/Topic'),
      // props: true
      props: true
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
