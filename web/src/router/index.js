import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      component: () => import('../components/common/Home'),
      meta: { title: '自述文件' },
      children: [
        {
          path: 'user',
          name: 'HelloWorld',
          component: () => import('../view/index')
        }
      ]
    }
  ]
})
