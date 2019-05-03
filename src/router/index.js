import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navbar',
      component: Navbar
    }
  ]
})
