import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import content from '@/components/content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'content',
      component: content
    },
    {
      path: '/he', // 不要用/index,/就是至index下的
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
