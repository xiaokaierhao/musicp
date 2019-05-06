import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index/Index'
import Music from '@/view/music/Music'
import Bbs from '@/view/bbs/Bbs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
      	{
      		path: "/music",
      		components: { Music }
      	},
      	{
      		path: "/bbs",
      		components: { Bbs }
      	}
      ]
    }
  ]
})
