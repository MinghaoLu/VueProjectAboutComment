import Vue from 'vue'
import Router from 'vue-router'
/*导入组件*/
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      /*组件名*/
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
